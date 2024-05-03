import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center 
    <h1>Welcome</h1>
      <br/>
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Discover a new world,explore new thoughts.
    </p>

    <Feed />
  </section>
);

export default Home;
