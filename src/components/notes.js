import axios from "axios";

const BASE_URL = '/api/notes'

const getAll = () => {
	const request = axios.get(BASE_URL)
	const nonExisting = {
	  id: 10000,
	  content: 'This note is not saved to server',
	  date: '2019-05-30T17:30:31.098Z',
	  important: true,
	}
	return request.then(response => response.data.concat(nonExisting))
  }

const create = (noteObject) => {
	const request = axios.post(BASE_URL, noteObject)
	return request.then(res => res.data)
}

const update = (changedNote, id) => {
	const request = axios.put(`${BASE_URL}/${id}` , changedNote)
	return request.then(res => res.data)
}

export default {getAll, create, update}