const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://api.chucknorris.io'
});

function xhrRequest(api) {
	return axiosInstance(api);
}

export default xhrRequest;