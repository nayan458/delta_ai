import axios from 'axios';
import React, { useState } from 'react'

export default function useAi() {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };


    const handleClick = async () => {
        const url = 'https://api.openai.com/v1/completions';
        const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`
        };
        const data = {
        prompt: `Take the title below and explain in detail ${text}`,
        max_tokens: 2000,
        model : 'text-davinci-003',
        n: 1,
        };

        try {
        const res = await axios.post(url, data, { headers });
        setResponse(res.data.choices[0].text);
        console.log(await res)
        } catch (err) {
        console.error(err);
        }
    };
  return {
    text,
    response,
    handleClick,
    handleChange
  }
}
