import Feed from "../Feed/Feed";

const Home = () => {
  return (
    <>
      <div className="landing-div shadow">
        <div
          className="container text-center"
          style={{ paddingTop: "10%", paddingBottom: "70px" }}
        >
          <h2 className="text-white">Image Gallery</h2>
          <small className="text-white">
            High resolution images from creators all around the world.
          </small>
        </div>
      </div>
      <Feed />
      <center>
        <p className="text-secondary">Crafted by Ubaid Kolad</p>
      </center>
    </>
  );
};

export default Home;
