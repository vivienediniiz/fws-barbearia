import React from 'react';
import { Card } from '@/components/ui/Card';

interface ServiceCardProps {
  name: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  icon,
  image,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer border border-gold-400 border-opacity-30"
      hover
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 text-gold-400">
            {icon}
          </div>
        )}
        {image && (
          <img
            src={image}
            alt={name}
            className="h-16 w-16 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <h3 className="font-serif text-lg font-semibold text-taupe-700">
            {name}
          </h3>
          <p className="mt-1 text-sm text-taupe-600">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
