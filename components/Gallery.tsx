import Image from "next/image";
const data = [
  { src: "/panel2.jpg", alt: "Residential solar installation" },
  { src: "/panel7.jpeg", alt: "Commercial solar installation" },
  { src: "/convertor.jpg", alt: "Solar inverter installation" },
  { src: "/panel8.jpeg", alt: "Solar Maintainence" },
  { src: "/str2.jpeg", alt: "Solar Farm Structure" },
  { src: "/str3.jpeg", alt: "Structure" },
];
const OurGallery = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((card) => {
        return (
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              key={Math.random.toString()}
              src={card.src}
              alt={card.alt}
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-semibold">{card.alt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default OurGallery;
