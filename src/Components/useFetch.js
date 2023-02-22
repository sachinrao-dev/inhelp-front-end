import { useState, useEffect } from "react";

function useFetch(props) {
  const [Data, setData] = useState();
  useEffect(() => {
    fetch(props)
      .then((res) => res.json())
      .then((item) => setData(item));
  }, [props]);
  return [Data];
}

export default useFetch;
