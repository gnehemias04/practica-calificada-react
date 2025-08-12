const people = [
  {
    name: "Bill Mahoney",
    rol: "PRODUCT OWNER",
    img: "../images/photo1.png",
    id: 0,
  },
  {
    name: "Saba Cabrera",
    rol: "ART DIRECTOR",
    img: "../images/photo2.png",
    id: 1,
  },
  { name: "Shae Le", rol: "TEACH LEAD", img: "../images/photo3.png", id: 2 },
  { name: "Skylah Lu", rol: "UX DESIGNER", img: "../images/photo4.png", id: 3 },
  {
    name: "Griff Ricchards",
    rol: "DEVELOPER",
    img: "../images/photo5.png",
    id: 4,
  },
  { name: "Stan John", rol: "DEVELOPER", img: "../images/photo6.png", id: 5 },
];

export function Card() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 w-full h-full  p-4 lg:p-16 gap-4">
      {people.map((e) => {
        const mtMobile = [1, 3, 5].includes(e.id) ? "mt-14" : "";
        const mtLg = [1, 4].includes(e.id) ? "lg:mt-16" : "lg:mt-0";

        return (
          <div key={e.id} className={`w-full h-full ${mtMobile} ${mtLg}`}>
            <div className="flex m-0 p-0">
              <img
                className="w-[90%] sm:w-[96%] md:w-[94%] lg:w-[96%] max-w-80 object-cover"
                src={e.img}
                alt={e.name}
              />
              <div className="w-[10%] sm:w-[4%] md:w-[6%] lg:w-[4%]">
                <p className="rotate-90 text-[10px] md:text-sm lg:text-lg whitespace-nowrap">
                  {e.rol}
                </p>
              </div>
            </div>
            <p className="font-bold">{e.name}</p>
          </div>
        );
      })}
    </div>
  );
}
