import api from './api-config';

export const getAllEvents = async () => {
	const resp = await api.get('/events');
	return resp.data;
};

export const getOneEvent = async (id) => {
	const resp = await api.get(`/events/${id}`);
	return resp.data;
};

export const postEvent = async (eventData) => {
	const resp = await api.post('/events', { event: eventData });
	return resp.data;
};

export const putEvent = async (id, eventData) => {
	const resp = await api.put(`/events/${id}`, { event: eventData });
	return resp.data;
};

export const deleteEvent= async (id) => {
	const resp = await api.delete(`/events/${id}`);
	return resp;
};

// CUSTOM
// export const addEvent = async (eventId, commentId) => {
// 	const resp = await api.put(`/comments/${commentId}/events/${eventId}`);
// 	return resp.data;
// };
