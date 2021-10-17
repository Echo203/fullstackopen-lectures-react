import axios from "axios";

const BASE_URL = '/api/notes'

let token = null

const setToken = newToken => {
	token = `bearer ${newToken}`
}

const getAll = () => {
	const request = axios.get(BASE_URL)
	return request.then(response => response.data)
  }

const create = async (noteObject) => {
	const config = {
		headers: { "authorization": token },
	}
	console.log("token: ", token)
	const res = await axios.post(BASE_URL, noteObject, config)
	console.log(res)
	return res.data
}

const update = (changedNote, id) => {
	const request = axios.put(`${BASE_URL}/${id}` , changedNote)
	return request.then(res => res.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, update, setToken}