import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Events from '../screens/Events';
import EventCreate from '../screens/EventCreate';
import EventDetail from '../screens/EventDetail';


import { getAllEvents, postEvent } from '../services/events';

import './MainContainer.css'

export default function MainContainer() {
  const [events, setEvents] = useState([])
  const history = useHistory()

  useEffect(() => {
		const fetchEvents = async () => {
			const eventList = await getAllEvents()
			setEvents(eventList)
		}
		fetchEvents()
  }, [])
  
  const handleCreate = async (formData) => {
		const eventItem = await postEvent(formData)
		setEvents((prevState) => [...prevState, eventItem])
		history.push('/events')
  }
  
  return (
    <div>
      <h4>(this is main container)</h4>
      <Switch>
      <Route path='/events/:id'>
          <EventDetail events={events} />     
        </Route>
      <Route path='/events/new'>
				<EventCreate handleCreate={handleCreate} />
			</Route>  
      <Route path='/events'>
					<Events events={events} />
      </Route>
      
        
      </Switch>
      
    </div>

  );
};

