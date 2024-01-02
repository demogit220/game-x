import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b72145025be04c959877dbcd4a792862'
    }
})