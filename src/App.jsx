import { Card } from "./components/Card";
import { DarckMode } from "./Darck";

function App() {
  return (
    <>
      <DarckMode />
      <div className="grid place-items-center lg:grid-cols-2">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold ">
          The creative crew
        </h1>
        <div className="mx-10">
          <h2 className="font-bold md:text-xl lg:text-2xl">Who we are</h2>
          <p className="text-[12px] md:text-lg lg:text-xl">
            We are a team of creatively diverse. drive, innovative individuals
            working in varioes locations from the world.
          </p>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Card />
      </div>
    </>
  );
}

export default App;
