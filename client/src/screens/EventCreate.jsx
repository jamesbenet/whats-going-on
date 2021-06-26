import { useState } from 'react';

export default function EventCreate(props) {
	const [formData, setFormData] = useState({
    performer_name: '',
    performer_img_url: '',
    venue_name: '',
    venue_location: '',
    event_url: '',
  })
  
  const { performer_name,
    performer_img_url,
    venue_name,
    venue_location,
    event_url } = formData
	const { handleCreate } = props;
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

  return (
    <div>
		<form className="add-event-form"
			onSubmit={(e) => {
				e.preventDefault();
				handleCreate(formData);
			}}
		>
			<h3>Add a new, upcoming event:</h3>
			<label>
				Name:
				<input type='text' placeholder='Performer' name='performer_name' value={performer_name} onChange={handleChange} />
      </label>
      <label>
				Name:
				<input type='text' name='performer_img_url' value={performer_img_url} onChange={handleChange} />
      </label>
      <label>
				Name:
				<input type='text' name='venue_name' value={venue_name} onChange={handleChange} />
      </label>
      <label>
				Name:
				<input type='text' name='venue_location' value={venue_location} onChange={handleChange} />
      </label>
      <label>
				Name:
				<input type='text' name='event_url' value={event_url} onChange={handleChange} />
			</label>
			<button>Submit</button>
      </form>
      </div>
	);
}