import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID L77uvoiGyQnFrQ8E0Gio_C_qptFX0MPVCccRV0P4Gh8'
    }
});