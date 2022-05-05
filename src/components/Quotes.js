import { useState, useEffect } from "react";

function Quotes() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest");
      const quote = await res.json();
      setQuote(quote[1].respond);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h3>{quote}</h3>
    </div>
  );
}

export default Quotes;
