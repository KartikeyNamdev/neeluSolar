import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Sun, Shield, Award, Zap } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Sun,
      title: "Clean Energy",
      description: "Harness the power of the sun for sustainable living",
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      description: "Comprehensive coverage on all installations",
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Licensed and experienced solar technicians",
    },
    {
      icon: Zap,
      title: "Maximum Efficiency",
      description: "Premium panels with up to 22% efficiency rating",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">
              Est. 2015
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-6">
              Leading Solar Energy Provider in India
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Neelu Solar Pvt. Ltd. has been at the forefront of India's
              renewable energy revolution for a long time. We specialize in
              designing, installing, and maintaining premium solar panel systems
              for residential and commercial properties throughout Bhopal and
              the surrounding region.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified engineers and installers has completed over
              many successful installations, helping Bhopal residents reduce
              their energy costs by up to 80% while contributing to a cleaner,
              more sustainable future.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="border-none shadow-none bg-slate-100"
                >
                  <CardContent className="p-4">
                    <highlight.icon className="w-8 h-8 text-primary mb-2" />
                    <h4 className="mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="/new/7.jpeg"
                  alt="Solar Installation"
                  className="w-full h-70 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1626793369994-a904d2462888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NjQ0MTQzMTR8MA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Solar Technician"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1634412115855-46264464c6b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2xhciUyMGhvdXNlfGVufDF8fHx8MTc2NDQxNDMxNHww&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Solar Powered Home"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1607171779628-903a203e58e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVuZXJneSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDQxNDMxNXww&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Renewable Energy"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
