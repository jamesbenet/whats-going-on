import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Events from "../screens/Events";
import EventCreate from "../screens/EventCreate";
import EventDetail from "../screens/EventDetail";
import EventEdit from "../screens/EventEdit";

import {
  deleteEvent,
  getAllEvents,
  postEvent,
  putEvent,
} from "../services/events";

import "./MainContainer.css";

export default function MainContainer() {
  const [events, setEvents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getAllEvents();
      setEvents(eventList);
    };
    fetchEvents();
  }, []);

  const handleCreate = async (formData) => {
    const eventItem = await postEvent(formData);
    setEvents((prevState) => [...prevState, eventItem]);
    history.push("/events");
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
          <EventDetail events={events} handleDelete={handleDelete} />
        </Route>

        <Route path="/events">
          <Events events={events} />
        </Route>
      </Switch>
    </div>
  );
}
