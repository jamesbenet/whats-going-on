import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Events from '../screens/Events';
import EventDetail from '../screens/EventDetail';

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
      <h4>(this is main container)</h4>
      <Switch>
      <Route path='/events/:id'>
        <EventDetail events={events} />
			</Route>
      <Route path='/events'>
					<Events events={events} />
      </Route>
      
        
      </Switch>
      
    </div>

  );
};

