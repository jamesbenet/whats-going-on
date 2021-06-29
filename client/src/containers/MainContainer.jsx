import "./MainContainer.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Events from "../screens/Events/Events";
import EventCreate from "../screens/EventCreate/EventCreate";
import EventDetail from "../screens/EventDetail/EventDetail";
import EventEdit from "../screens/EventEdit";
import About from "../screens/About/About";

import {
  deleteEvent,
  getAllEvents,
  postEvent,
  putEvent,
} from "../services/events";

import { getAllComments, postComment } from "../services/comments";

import "./MainContainer.css";

export default function MainContainer() {
  const [events, setEvents] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getAllEvents();
      setEvents(eventList);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getAllComments();
      setComments(commentList);
    };
    fetchComments();
  }, []);

  const handleCreate = async (formData) => {
    const eventItem = await postEvent(formData);
    setEvents((prevState) => [...prevState, eventItem]);
    history.push("/events");
  };

  const handleCommentCreate = async (id, formData) => {
    const commentItem = await postComment(id, formData);
    setComments((prevState) => [...prevState, commentItem]);
    history.push("/events")
  };

  const handleUpdate = async (id, formData) => {
    const eventItem = await putEvent(id, formData);
    setEvents((prevState) =>
      prevState.map((event) => {
        return event.id === Number(id) ? eventItem : event;
      })
    );
    history.push("/events");
  };
  const handleDelete = async (id) => {
    await deleteEvent(id);
    setEvents((prevState) => prevState.filter((event) => event.id !== id));
  };

  return (
    <div>
      <Switch>
        <Route path="/events/:id/edit">
          <EventEdit events={events} handleUpdate={handleUpdate} />
        </Route>
        <Route path="/events/new">
          <EventCreate handleCreate={handleCreate} />
        </Route>
        <Route path="/events/:id">
          <EventDetail
            comments={comments}
            events={events}
            handleCommentCreate={handleCommentCreate}
            handleDelete={handleDelete}
          />
        </Route>

        <Route path="/events">
          <Events events={events} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}
