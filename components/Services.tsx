import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Sun,
  Battery,
  TrendingDown,
  Shield,
  Leaf,
  Zap,
  Settings,
  Award,
  Smartphone,
  Headphones,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Sun,
      title: "Premium Panels",
      description: "Tier-1 solar panels with 25+ year lifespan",
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Battery backup systems for 24/7 power",
    },
    {
      icon: TrendingDown,
      title: "Cost Savings",
      description: "Reduce electricity bills by up to 80%",
    },
    {
      icon: Shield,
      title: "Full Warranty",
      description: "Comprehensive 25-year warranty coverage",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Zero emissions clean energy solution",
    },
    {
      icon: Zap,
      title: "High Efficiency",
      description: "Up to 22% energy conversion efficiency",
    },
    {
      icon: Settings,
      title: "Professional Install",
      description: "Certified technicians and quality workmanship",
    },
    {
      icon: Award,
      title: "Government Certified",
      description: "Licensed and accredited installations",
    },
    {
      icon: Smartphone,
      title: "Smart Monitoring",
      description: "Track energy production via mobile app",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer service team",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Complete Solar Energy Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From consultation to installation and maintenance, we provide
            everything you need to harness the power of solar energy for your
            property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
