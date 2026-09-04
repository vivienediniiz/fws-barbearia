'use client';

import React from 'react';
import Link from 'next/link';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const menuItems = [
  { label: 'Nossos Serviços', href: '#', icon: '💐' },
  { label: 'Boutique Home Care', href: '#', icon: '🏠' },
  { label: 'Dicas da Dra.', href: '#', icon: '💡' },
  { label: 'Clube Flowers', href: '#', icon: '👑' },
  { label: 'Indique uma Amiga', href: '#', icon: '💌' },
  { label: 'Localização', href: '#', icon: '📍' },
  { label: 'Fale Conosco', href: '#', icon: '💬' },
];

export default function ProfilePage() {
  return (
    <ClientLayout>
      <Header title="Perfil" showBack />

      <div className="space-y-6 px-6 py-6">
        {/* Profile Card */}
        <Card className="text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-500 text-2xl text-white">
              M
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-taupe-700">
                Marcela Silva
              </h2>
              <p className="text-sm text-taupe-600">marcela@example.com</p>
            </div>
          </div>
        </Card>

        {/* Settings */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-taupe-700">
            Menu
          </h3>
          <div className="space-y-2">
            {menuItems.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <Card hover className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-taupe-700">{item.label}</span>
                  </div>
                  <svg
                    className="h-5 w-5 text-taupe-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <Button variant="secondary" size="lg" fullWidth>
          Sair
        </Button>
      </div>
    </ClientLayout>
  );
}
