import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Events(props) {
  const { events } = props
  
	return (
		<div>
			<h1>Upcoming Events</h1>
			{events.map((event) => (
				<Fragment key={event.id}>
					<Link to={`/events/${event.id}`}>
						<p>{event.performer_name}</p>
					</Link>
				</Fragment>
			))}
			<br />
			<Link to='/events/new'>
				<button>Create</button>
			</Link>
		</div>
	);
}