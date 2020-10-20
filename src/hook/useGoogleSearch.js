import { useState, useEffect } from "react";
import API_KEY from "../components/Keys";

const CONTEXT_API = "70f57dab46b6acb89";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_API}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
    return { data }
};

export default useGoogleSearch;
