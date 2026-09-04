'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface BottomNavProps {
  items: NavItem[];
}

export const BottomNav: React.FC<BottomNavProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-[#F5F2ED] bg-white">
      <div className="flex justify-around">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-1 flex-col items-center justify-center py-4 px-3
                transition-colors duration-200
                ${
                  isActive
                    ? 'text-[#D4AF37]'
                    : 'text-[#4A3B32] hover:text-[#3D2C22]'
                }
              `.trim()}
            >
              <div className="h-6 w-6">{item.icon}</div>
              <span className="mt-1 text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
