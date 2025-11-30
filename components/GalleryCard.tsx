import Image from "next/image";

const GalleryCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Image
        // src="/panel2.jpg"
        src={src}
        // alt="Residential solar installation"
        alt={alt}
        width={400}
        height={300}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white font-semibold">{alt}</p>
      </div>
    </div>
  );
};
export default GalleryCard;
