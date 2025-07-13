
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, features, delay = 0 }: ServiceCardProps) {
  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/90 backdrop-blur-sm border-0 overflow-hidden animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-8">
        <div className="relative">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float">
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-dark-purple transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center text-sm text-muted-foreground transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary opacity-5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        </div>
      </CardContent>
    </Card>
  );
}
