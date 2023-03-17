import axios from 'axios';
import React, { useState } from 'react'

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

    const API_KEY = "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";
    // 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

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
        const url = 'https://api.openai.com/v1/completions';
        const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
        };
        const data = {
        prompt: `Take the title below and explain in detail about its concept.
                Title: ${text}`,
        max_tokens: 2000,
        model : 'text-davinci-003',
        n: 1,
        };
        setSpin(true)
        try {
        
        const res = await axios.post(url, data, { headers });
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
          const res = await axios.post(url, codeblock, { headers });
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
