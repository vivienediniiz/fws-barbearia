'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const WelcomeScreen: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#FDFBF7] to-[#FAF8F5] px-6 pb-12 pt-16">
      <div className="flex-1" />

      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <svg
            className="h-24 w-24 text-[#3D2C22]"
            fill="none"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 110L30 70L45 50L60 20L75 50L90 70L60 110Z"
              fill="currentColor"
              opacity="0.1"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="60" cy="35" r="3" fill="currentColor" />
          </svg>
          <h2 className="font-serif text-2xl font-bold text-[#3D2C22]">
            Estética
          </h2>
          <h1 className="font-serif text-3xl font-bold text-[#3D2C22]">
            Flowers
          </h1>
        </div>

        <div className="text-center">
          <h3 className="mb-2 font-serif text-2xl font-bold text-[#3D2C22]">
            Bem-vinda à
          </h3>
          <p className="text-base text-[#4A3B32]">
            Sua jornada para uma beleza natural começa aqui. Acesse sua conta
            para agendar.
          </p>
        </div>
      </div>

      <div className="flex-1" />

      {/* Action Buttons */}
      <div className="w-full space-y-3">
        <Link href="/auth/login" className="block">
          <Button variant="primary" size="lg" fullWidth>
            Entrar
          </Button>
        </Link>
        <Link href="/auth/signup" className="block">
          <Button variant="secondary" size="lg" fullWidth>
            Cadastrar
          </Button>
        </Link>
      </div>
    </div>
  );
};
