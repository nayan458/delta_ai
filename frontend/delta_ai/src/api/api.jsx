import axios from "axios";

const API_KEY = "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";

const OpenaiInstance = axios.create({
    baseURL: 'https://api.openai.com/v1/completions',
    headers : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
        }
})

export default OpenaiInstance