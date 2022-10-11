import { useState, useEffect } from "react";

export const useFetch = (url, ref, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        (async () => {
          try {
            const res = await fetch(url);
            const resJson = await res.json();
            setData(resJson);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        })();
      }
      return () => {
        ref.current = false;
      };
    }, 1000);
  }, [url, ref]);
  return { loading, data, error };
};
