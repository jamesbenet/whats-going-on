import { useState, useEffect } from "react";
// import "./EventDetail.css";
// import Layout from "../layouts/Layout";
import { getOneEvent, deleteEvent } from "../services/events";
import { useParams, useHistory, Link } from "react-router-dom";

export default function EventDetail(props) {
  const [event, setEvent] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  // const history = useHistory();

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getOneEvent(id);
      setEvent(event);
      setLoaded(true);
    };
    fetchEvent();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    // <Layout user={props.user}>
      <div className="event-detail">
        <img
          className="event-detail-image"
          src={event.performer_img_url}
          alt={event.performer_name}
        />
        <div className="detail">
          <div className="event-name">{event.event_name}</div>
          <div className="performer-info">{event.performer_info}</div>
          <div className="venue-location">{event.venue_location}</div>
        </div>
      </div>
    // </Layout>
  );

}


