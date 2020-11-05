const axios = require('axios').default;

function create(resource){
    const result = axios.post('http://')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
}