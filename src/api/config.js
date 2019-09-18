import axios from 'axios';

export const basUrl = 'http://localhost:4000';

// axios的实例及拦截器配置
const axiosInstance = axios.create({
    baseURL: basUrl
});

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误')
    }
);

export {
    axiosInstance
};