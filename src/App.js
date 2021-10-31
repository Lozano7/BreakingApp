import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';
import { useFetch } from './hooks/useFetch';

const initialQuote = {
  text: '',
  author: '',
};
let url = 'https://breakingbadapi.com/api/quote/random';

const getData = async (url, setQuote) => {
  try {
    let response = await fetch(url);

    if (!response.ok) throw new Error(response.statusText || '404');

    let data = await response.json();
    const newQuote = {
      ...initialQuote,
      text: data[0].quote,
      author: data[0].author,
    };
    setQuote(newQuote);
  } catch (err) {
    console.error(err);
  }
};

function App() {
  let { data } = useFetch(url);
  const [quote, setQuote] = useState(initialQuote);

  useEffect(() => {
    if (data) {
      const newQuote = {
        ...initialQuote,
        text: data[0].quote,
        author: data[0].author,
      };
      setQuote(newQuote);
    }
  }, [data]);

  return (
    <div className='app'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg'
        alt='logo'
      />
      <button
        onClick={(e) => {
          getData(url, setQuote);
        }}
      >
        Get Another
      </button>
      <Quote quote={quote} />
    </div>
  );
}

export default App;
