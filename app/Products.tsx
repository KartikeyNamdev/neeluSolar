import Image from "next/image";
import { productCategories } from "../lib/productsData";
import { BatteryFull, Cable, Grid3X3 } from "lucide-react";

export default function ProductsSection() {
  return (
    <section className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-4">
          Our Products
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We have variety of different community product to give a best working
          model
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {productCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center gap-2 mb-4 text-xl font-semibold">
                <span className="">
                  {category.title == "Panel" ? (
                    <Grid3X3 className=" text-yellow-500" />
                  ) : category.title == "Convertor" ? (
                    <BatteryFull className=" text-yellow-500" />
                  ) : (
                    <Cable className=" text-yellow-500" />
                  )}
                </span>{" "}
                {category.title}
              </div>
              <div className="grid grid-cols-2 gap-4 place-items-center">
                {category.brands.map((brand) => (
                  <Image
                    key={brand.name}
                    src={brand.src}
                    alt={brand.name}
                    width={120}
                    height={50}
                    className="object-contain max-h-[50px]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
