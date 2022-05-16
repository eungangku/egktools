import { useState, useEffect } from "react";
import styles from "./Quotes.module.css";

function Quotes({ backgroundColor }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest");
      const quote = await res.json();

      let deviderIndex = quote[1].respond.indexOf("–");
      if (deviderIndex < 0) {
        deviderIndex = quote[1].respond.indexOf("-");
      }
      setQuote(quote[1].respond.slice(0, deviderIndex));
      setAuthor(quote[1].respond.slice(deviderIndex));
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
      <div>
        <div className={styles.desc}>
          <h1 className={styles.title}>{quote}</h1>
          <h3 className={styles.date}>{author}</h3>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
