'use client';

import React, { useState } from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ServiceCard } from '@/components/booking/ServiceCard';

const services = [
  {
    name: 'Consultoria Avaliativa',
    description: 'Recomendado para a sua primeira vez. Descubra o protocolo ideal para você.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Procedimentos Corporais',
    description: 'Drenagem, modeladora e combate à gordura localizada',
  },
  {
    name: 'Procedimentos Faciais',
    description: 'Limpeza de pele profunda, peelings e microagulhamento.',
  },
  {
    name: 'Tratamentos Capilares',
    description: 'Terapia capilar, combate à queda e fortalecimento.',
  },
  {
    name: 'Injetáveis e Harmonização',
    description: 'Toxina botulínica, preenchimentos e bioestimuladores.',
  },
];

export default function HomePage() {
  const [bannerIndex, setBannerIndex] = useState(0);

  const banners = [
    {
      title: 'Sua pele merece uma estratégia.',
      subtitle: 'Descubra o protocolo ideal para você',
      color: 'from-[#E8A8A8] to-[#D98989]',
    },
    {
      title: 'Beleza natural começa aqui.',
      subtitle: 'Agendamentos fáceis e rápidos',
      color: 'from-[#D4AF37] to-[#C5A059]',
    },
  ];

  const currentBanner = banners[bannerIndex];

  return (
    <ClientLayout>
      <div className="space-y-6 px-6 py-6">
        {/* Personalized Greeting */}
        <div className="space-y-2">
          <h1 className="font-serif text-2xl font-bold text-[#3D2C22]">
            Olá, Marcela
          </h1>
          <p className="text-[#4A3B32]">
            Que Bom Ter Você Aqui. Vamos Cuidar De Você Hoje?
          </p>
        </div>

        {/* Banner Carousel */}
        <Card noPadding className="overflow-hidden">
          <div className={`bg-gradient-to-br ${currentBanner.color} p-8 text-white`}>
            <h2 className="font-serif text-2xl font-bold">
              {currentBanner.title}
            </h2>
            <p className="mt-2 text-sm opacity-90">
              {currentBanner.subtitle}
            </p>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 py-3">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setBannerIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === bannerIndex
                    ? 'w-6 bg-gold-400'
                    : 'bg-[#F5F2ED] hover:bg-cream-300'
                }`}
              />
            ))}
          </div>
        </Card>

        {/* CTA Button */}
        <Button variant="primary" size="lg" fullWidth>
          Agendar Consultoria
        </Button>

        {/* Next Appointment Section */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#3D2C22]">
            Próximo Compromisso
          </h3>
          <Card className="border border-[#D4AF37] /30">
            <div className="text-center">
              <p className="text-sm text-[#4A3B32]">Você ainda não tem</p>
              <p className="mt-2 text-xs text-[#5A4B42]">
                Agende uma consultoria agora mesmo
              </p>
            </div>
          </Card>
        </div>

        {/* Services Section */}
        <div className="space-y-3">
          <h3 className="font-serif text-lg font-semibold text-[#3D2C22]">
            Nossos Serviços
          </h3>
          <div className="space-y-3">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
