import axios from 'axios';
import React, { useState } from 'react'
import OpenaiInstance from '../api/api';

export default function useAi() {
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');
    const [codeBlock, setCodeBlock] = useState('');
    const [error, setError] = useState(false)
    const [spin, setSpin] = useState(false)

    const handleChange = (event) => {
      try {
        setText(event.target.value);
        if(!text && error){
          setError(true)
          return
        }else{
          setError(false)
        }

      } catch (error) {
        
      }
    };

    // const API_KEY = "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";

    const handleClick = async () => {
        try {
          if(!text){
            setError(true)
            return
          }else{
            setError(false)
          }

        } catch (error) {
          
        }
        // const url = 'https://api.openai.com/v1/completions';
        // const headers = {
        // 'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${API_KEY}`
        // };
        const data = {
          prompt: `Take the title below and explain in detail about its concept.
                  Title: ${text}`,
          max_tokens: 2000,
          model : 'text-davinci-003',
          n: 1,
        };
        setSpin(true)
        try {
        
        // const res = await axios.post(url, data, { headers });
        const res = await OpenaiInstance.post('',data);
        setResponse(res.data.choices[0].text);
        // console.log(await res)
        } catch (err) {
        console.error(err);
        }
        
        console.log(text)

        const codeblock = {
            prompt: `Generate a code block of the title below.
            
            Title : ${text}`,
            max_tokens: 2000,
            model : 'text-davinci-003',
            n: 1,
        }

        try {
          // const res = await axios.post(url, codeblock, { headers });
          const res = await OpenaiInstance.post('', codeblock);
          setCodeBlock(res.data.choices[0].text);
          console.log(res)
          } catch (err) {
          console.error(err);
          }
        setSpin(false)

    };

  return {
    text,
    response,
    codeBlock,
    error,
    spin,
    handleClick,
    handleChange
  }
}
