import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((respone) => {
          if (!respone.ok) {
            throw Error("Cannot get data from API!");
          }
          return respone.json();
        })
        .then((data) => {
          setLoadingStatus(false);
          setData(data);
        })
        .catch((error) => {
          setLoadingStatus(false);
          setErrorMessage(error.message);
        });
    }, 1000);
  }, []);

  return { data, loadingStatus, errorMessage, setData };
};

export default useFetch;
