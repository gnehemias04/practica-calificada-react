import { Card } from "./components/Card";
import { DarckMode } from "./Darck";
const people = [
  {
    name: "Bill Mahoney",
    rol: "PRODUCT OWNER",
    img: "/images/photo1.png",
    id: 0,
  },
  {
    name: "Saba Cabrera",
    rol: "ART DIRECTOR",
    img: "/images/photo2.png",
    id: 1,
  },
  { name: "Shae Le", rol: "TEACH LEAD", img: "/images/photo3.png", id: 2 },
  { name: "Skylah Lu", rol: "UX DESIGNER", img: "/images/photo4.png", id: 3 },
  {
    name: "Griff Ricchards",
    rol: "DEVELOPER",
    img: "/images/photo5.png",
    id: 4,
  },
  { name: "Stan John", rol: "DEVELOPER", img: "/images/photo6.png", id: 5 },
];

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
        <Card people={people} />
      </div>
    </>
  );
}

export default App;
