import axios from 'axios'



    const openAi = axios.create({
        baseURL: `https://api.openai.com/v1`,
        headers: {
            'Authorization' : 'Bearer ' + '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',
            'Content-Type' : "application/json"
        },
    });

    // instance.defaults.baseURL = 'http://localhost:8000/api/'

    // instance.interceptors.request.use(
    //     function(request){
    //         let {baseURL}=request
    //         if(baseURL !== 'http://localhost:8000/api/')
    //             request.baseURL = 'http://localhost:8000/api/'
    //         return request
    //     }
    // )

  export default openAi
