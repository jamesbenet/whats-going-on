import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Events(props) {
  const { events } = props
  
	return (
		<div>
      <h1>Upcoming Events</h1>
      <Link to='/events/new'>
				<button>Add a new event</button>
			</Link>
      
			{events.map((event) => (
				<Fragment key={event.id}>
					<Link to={`/events/${event.id}`}>
            <div>{event.performer_name}</div>
            <div>{event.date}</div>
            <div>{event.venue_location}</div>
					</Link>
				</Fragment>
			))}
		</div>
	);
}