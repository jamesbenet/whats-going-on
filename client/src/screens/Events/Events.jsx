import "./Events.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Events(props) {
  const { events } = props;

  return (
    <div className="events-list-page">
      <h1>Upcoming Events</h1>
      <Link to="/events/new">
        <button>Add a new event</button>
      </Link>

      {events.map((event) => (
        <Fragment key={event.id}>
          <Link to={`/events/${event.id}`}>
            <div classname="list-row">
              <div className="event-performer-wrapper">
                {event.performer_name}
              </div>
              <div className="event-date-wrapper">{event.date}</div>
              <div className="event-location-wrapper">
                {event.venue_location}
              </div>
            </div>
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
