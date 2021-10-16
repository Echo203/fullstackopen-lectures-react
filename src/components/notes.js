import axios from "axios";

const BASE_URL = '/api/notes'

const getAll = () => {
	const request = axios.get(BASE_URL)
	return request.then(response => response.data)
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