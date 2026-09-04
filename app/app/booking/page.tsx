'use client';

import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';

const serviceCategories = [
  {
    name: 'Consultoria Avaliativa',
    description: 'Recomendado para a sua primeira vez. Descubra o protocolo ideal para você.',
    icon: '📅',
  },
  {
    name: 'Procedimentos Corporais',
    description: 'Drenagem, modeladora e combate à gordura localizada',
    icon: '💪',
  },
  {
    name: 'Procedimentos Faciais',
    description: 'Limpeza de pele profunda, peelings e microagulhamento.',
    icon: '✨',
  },
  {
    name: 'Tratamentos Capilares',
    description: 'Terapia capilar, combate à queda e fortalecimento.',
    icon: '💇',
  },
  {
    name: 'Injetáveis e Harmonização',
    description: 'Toxina botulínica, preenchimentos e bioestimuladores.',
    icon: '💉',
  },
];

export default function BookingPage() {
  return (
    <ClientLayout>
      <Header title="Novo Agendamento" showBack />

      <div className="space-y-3 px-6 py-6">
        {serviceCategories.map((category, idx) => (
          <Card
            key={idx}
            hover
            className="border border-[#D4AF37]/30 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{category.icon}</span>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-[#3D2C22]">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-[#4A3B32]">
                  {category.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ClientLayout>
  );
}
