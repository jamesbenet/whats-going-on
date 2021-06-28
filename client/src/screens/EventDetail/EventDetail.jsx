
import { useState, useEffect } from "react";
import "./EventDetail.css";
import { getOneEvent, deleteEvent } from "../../services/events";
import { useParams, useHistory, Link } from "react-router-dom";

export default function EventDetail(props) {
  const [event, setEvent] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  // const history = useHistory();
  const { handleDelete } = props

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getOneEvent(id)
      setEvent(event)
      setLoaded(true)
    }
    fetchEvent()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    // <Layout user={props.user}>
      <div className="event-detail-page">
        <img
          className="event-detail-image"
          src={event.performer_img_url}
          alt={event.performer_name}
        />
        <div className="detail">
        <div className="event-name"><h1>{event.event_name}</h1></div>
        <div className="venue-name"><h2>@ {event.venue_name}</h2></div>
        <div className="venue-location">{event.venue_location}</div>
        <div className="performer-info"><p><b>About:</b> {event.performer_info}</p></div>
        
        <div className="performer-url">{event.performer_url}</div>
        
        
        
        
        <div className="venue-website">{event.venue_website}</div>
        <div className="event-url">{event.event_url}</div>
        <div className="venue-capacity">Capacity: {event.venue_capacity}</div>
        <img className="venue-image-url" src={event.venue_image_url} alt={event.venue_name} />


        </div>
        <Link to={`/events/${event.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/events`} onClick={() => handleDelete(event.id)}>
        Delete
      </Link>
      
      </div>
    // </Layout>
  );

}


