import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
}

const FeatureSection = ({ title, subtitle, features }: FeatureSectionProps) => {
  return (
    <section className="py-16 bg-gradient-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md bg-background/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/0 rounded-lg mb-4">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl lg:text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg lg:text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;