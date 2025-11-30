import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Clock, Star, Sun } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNjQzNzg0NTV8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Solar Panels Installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          {/* <Image
            src="/logo.jpeg"
            alt="Solar panels installation"
            width={1 / 2}
            height={1 / 2}
            className="rounded-lg shadow-xl sm:h-2/3 sm:w-2/3 h-1/2 w-1/2 "
          /> */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <Badge
          variant="secondary"
          className="mb-4 bg-white/20 text-white border-white/30"
        >
          <Star className="w-3 h-3 mr-1 fill-current" />
          4.9 Rating • Premium & Clean Solar Solutions
        </Badge>

        <h1 className="text-5xl md:text-7xl mb-6 text-white">
          Neelu Solar Pvt. Ltd.
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Transform your property with clean, renewable energy. Expert solar
          installations for homes and businesses across Bhopal and surrounding
          regions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <span>Serving Bhopal & Madhya Pradesh region</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Clock className="w-5 h-5" />
            <span>Mon-Sat 9:00 - 18:00</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-white/70">
            <Sun className="w-5 h-5 mr-2" />
            Get Free Quote
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-black hover:bg-white/10 hover:text-white"
          >
            Our Projects
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
