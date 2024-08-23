import axios from 'axios';
import Config from 'react-native-config';


const ApiApp = axios.create({
    baseURL: Config.API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
})

export { ApiApp }