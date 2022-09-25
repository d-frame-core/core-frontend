import axios, {AxiosRequestConfig} from 'axios';

const instance = axios.create({
	baseURL: 'api_url',
});

instance.interceptors.request.use(
	async (req: AxiosRequestConfig<any>) => {
		if (req.headers) {
			req.headers.Authorization = `Bearer `;
		}
		return req;
	},
	(err) => {
		throw new Error(err.response.data.message);
	},
);
export default instance;
