import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserRole } from '@/types/auth';
import { ArrowRight } from 'lucide-react';

interface RoleCardProps {
  role: UserRole;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const RoleCard: React.FC<RoleCardProps> = ({ 
  role, 
  title, 
  description, 
  features, 
  icon 
}) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate(`/login/${role}`);
  };

  return (
    <Card className="h-full shadow-card hover:shadow-elevated transition-smooth bg-gradient-card group cursor-pointer">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 relative">
          <img 
            src={icon} 
            alt={`${title} icon`}
            className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-bounce"
          />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          onClick={handleContinue}
          variant="hero" 
          className="w-full group-hover:shadow-glow"
        >
          Continue as {title}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};