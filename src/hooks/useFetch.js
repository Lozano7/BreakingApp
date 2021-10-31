import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let response = await fetch(url);

        if (!response.ok) {
          throw {
            error: true,
            status: response.status,
            statusText: !response.statusText
              ? 'Ocurrio un error'
              : response.statusText,
          };
        }

        let result = await response.json();
        setData(result);
        setError(false);
      } catch (err) {
        setData(null);
        setError(err);
      }
    };
    getData(url);
  }, [url]);
  return { data, error };
}
export { useFetch };
