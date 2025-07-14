import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Users, HardDrive, FileText, ShoppingCart } from "lucide-react";

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  buttonText: string;
  buttonVariant?: "default" | "gradient" | "blue-outline";
  features: {
    users: string;
    storage: string;
    files: string;
    imports: string;
  };
  allFeatures: string[];
  isPopular?: boolean;
}

const PricingCard = ({
  name,
  description,
  price,
  period,
  buttonText,
  buttonVariant = "default",
  features,
  allFeatures,
  isPopular = false,
}: PricingCardProps) => {
  return (
    <Card className={`relative h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? "border-primary bg-gradient-accent scale-105 shadow-blue" 
        : "border-border hover:border-primary/50"
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-6">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm mt-2">{description}</p>
        
        <div className="mt-6">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-foreground">{price}</span>
            <span className="text-muted-foreground ml-1">/{period}</span>
          </div>
        </div>
        
        <Button variant={buttonVariant} className="mt-6 w-full">
          {buttonText}
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Resource Limits */}
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Users className="w-4 h-4 mr-3 text-muted-foreground" />
            <span>{features.users}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <HardDrive className="w-4 h-4 mr-3 text-muted-foreground" />
            <span>{features.storage}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <FileText className="w-4 h-4 mr-3 text-muted-foreground" />
            <span>{features.files}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <ShoppingCart className="w-4 h-4 mr-3 text-muted-foreground" />
            <span>{features.imports}</span>
          </div>
        </div>
        
        <div className="border-t border-border pt-4">
          <ul className="space-y-3">
            {allFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-4 h-4 mr-3 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;