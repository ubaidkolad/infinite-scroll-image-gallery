export const getRandomPhotos = () => {
  return fetch(
    `https://api.unsplash.com/photos/random?client_id=TpjDskB-KmygqvESuVbTZ49Gg9YgJt3bWcsi6SdmrgU&count=1`
  )
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};
