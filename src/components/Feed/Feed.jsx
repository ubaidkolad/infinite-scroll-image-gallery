import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import PostCard from "../Card/PostCard";
import { getRandomPhotos } from "../Helper/helper";
import Loader from "./Loader";

const Feed = () => {
  const [images, setImages] = useState([]);

  const fetchRandomPhotos = () => {
    getRandomPhotos().then((data) => {
      if (data.errors) {
        alert("Could not fetch photos. Please try again later.");
      } else {
        console.log(data);
        setImages([...images, ...data]);
      }
    });
  };

  useEffect(() => {
    fetchRandomPhotos();
  }, []);

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={() => {
        setTimeout(() => {
          fetchRandomPhotos();
        }, 2000);
      }}
      hasMore
      loader={<Loader />}
    >
      <div id="columns">
        {images.map((image, index) => (
          <PostCard
            key={index}
            description={image.alt_description}
            url={image.urls.small}
            likes={image.likes}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Feed;
