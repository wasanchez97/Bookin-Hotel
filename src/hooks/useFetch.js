import axios from 'axios';
import { useState } from 'react';

const useFetch = () => {
	const [response, setResponse] = useState();

	const getData = (url) => {
		axios
			.get(url)
			.then((res) => setResponse(res.data))
			.catch((err) => console.error(err));
	};

	return [response, getData];
};

export default useFetch;
