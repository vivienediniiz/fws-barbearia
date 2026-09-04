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
      className="cursor-pointer border border-[#D4AF37]/30"
      hover
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 text-[#D4AF37]">
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
          <h3 className="font-serif text-lg font-semibold text-[#3D2C22]">
            {name}
          </h3>
          <p className="mt-1 text-sm text-[#4A3B32]">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
