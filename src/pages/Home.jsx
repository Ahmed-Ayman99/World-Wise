import Button from "../ui/Button";

const Home = () => {
  return (
    <section className="py-12 px-12 text-center">
      <h1 className="text-5xl leading-[1.3] mb-6 font-bold text-light2">
        You travel the world.
        <br /> WorldWise keeps track of your adventures.
      </h1>

      <h2 className="mb-14 text-xl text-light1 w-[90%] mx-auto">
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </h2>

      <Button to="/app">START TRACKING NOW</Button>
    </section>
  );
};

export default Home;
