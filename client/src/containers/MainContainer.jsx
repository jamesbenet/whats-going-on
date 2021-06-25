import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Events from '../screens/Events';

import { getAllEvents } from '../services/events';

import './MainContainer.css'

export default function MainContainer() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
		const fetchEvents = async () => {
			const eventList = await getAllEvents();
			setEvents(eventList);
		};
		fetchEvents();
	}, []);
  return (
    <div>
      <h1>Main Con</h1>
      <Switch>
      <Route path='/events'>
					<Events events={events} />
			</Route>
      </Switch>
      
    </div>

  );
};

