import { useEffect, useState } from "react";
import styles from "./RandomUnsplash.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const API_URL = "https://api.unsplash.com/photos/random?client_id=Gvh6T8PSaNUAvpYwDUn3C37pbbTDCIqnzNqjX1RGqbc&orientation=landscape&query=wallpaper";
const API_URL_2 = "https://picsum.photos/1920/1080";

function RandomUnsplash() {
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [imgTagLoading, setImgTagLoading] = useState(true);
  const [TryCount, setTryCount] = useState(0);
  // const [json, setJson] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        // setJson(json);
        setImgUrl(json.urls.regular);
        setDescription(json.alt_description);
        setLoading(false);
      } catch (err) {
        console.error(err);
        const response = await fetch(API_URL_2);
        const imageBlob = await response.blob();
        setImgUrl(URL.createObjectURL(imageBlob));
        setDescription("");
      }
    }
    fetchData();
  }, [TryCount]);

  function onContainerClick() {
    setTryCount((prev) => prev + 1);
  }

  function onImageLoading() {
    setImgTagLoading(false);
  }

  return (
    <div onClick={onContainerClick} className={styles.container}>
      {loading ? (
        <div>
          <Skeleton height={"30vh"} />
        </div>
      ) : (
        <div>
          {imgTagLoading ? <Skeleton height={"30vh"} /> : null}
          <img id="img" onLoad={onImageLoading} src={imgUrl} />
          <div className={styles.desc}>
            {/* <h1 className={styles.title}>{json.description}</h1> */}
            <h3 className={styles.date}>{description}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomUnsplash;
