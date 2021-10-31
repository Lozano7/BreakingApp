import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';
import { useFetch } from './hooks/useFetch';
const initialQuote = {
  text: '',
  author: '',
};

function App() {
  let { data } = useFetch('https://breakingbadapi.com/api/quote/random');
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
        onclick={() => {
          let { data } = useFetch(
            'https://breakingbadapi.com/api/quote/random'
          );
          const newQuote = {
            ...initialQuote,
            text: data[0].quote,
            author: data[0].author,
          };
          setQuote(newQuote);
        }}
      >
        Get Another
      </button>
      <Quote quote={quote} />
    </div>
  );
}

export default App;
