import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneEvent } from "../services/events";

export default function EventEdit(props) {
  const [event, setEvent] = useState({})
  const [isLoaded, setLoaded] = useState(false)
	const [formData, setFormData] = useState({
    performer_name: "",
    performer_img_url: "",
    venue_name: "",
    venue_location: "",
    event_url: "",
  })

  const {
    performer_name,
    performer_img_url,
    venue_name,
    venue_location,
    event_url,
  } = formData

	const { events, handleUpdate } = props
	const { id } = useParams()

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getOneEvent(id)
      setEvent(event)
      setLoaded(true)
    }
    fetchEvent()
  }, [id])
  
  useEffect(() => {
		const prefillFormData = () => {
			const singleEvent = events.find((event) => event.id === Number(id))
			setFormData({
        performer_name: singleEvent.performer_name,
        performer_img_url: singleEvent.performer_img_url,
        venue_name: singleEvent.venue_name,
        venue_location: singleEvent.venue_location,
        event_url: singleEvent.event_url,
			});
		};
		if (events.length) {
			prefillFormData()
		}
	}, [events])

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	};

	return (
    <div>
      <form
        className="edit-event-form"
        onSubmit={(e) => {
          e.preventDefault()
          handleUpdate(id, formData)
        }}
      >
        <h3>Edit event:</h3>
        <label>
          Performer:
          <input
            type="text"
            name="performer_name"
            value={performer_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Performer image URL:
          <input
            type="text"
            name="performer_img_url"
            value={performer_img_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Venue name:
          <input
            type="text"
            name="venue_name"
            value={venue_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="venue_location"
            value={venue_location}
            onChange={handleChange}
          />
        </label>
        <label>
          Event URL:
          <input
            type="text"
            name="event_url"
            value={event_url}
            onChange={handleChange}
          />
        </label>
        <button>Save</button>
      </form>
    </div>
  );
}

