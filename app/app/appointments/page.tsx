'use client';

import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/Card';

export default function AppointmentsPage() {
  return (
    <ClientLayout>
      <Header title="Meus Agendamentos" showBack />

      <div className="px-6 py-6">
        <div className="rounded-2xl border-2 border-dashed border-[#F5F2ED] p-8 text-center">
          <p className="text-lg text-[#4A3B32]">Você ainda não tem agendamentos</p>
          <p className="mt-2 text-sm text-[#5A4B42]">
            Agende sua primeira consultoria agora
          </p>
        </div>

        <div className="mt-8 space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#3D2C22]">
            Como funciona
          </h3>
          <Card>
            <ol className="list-inside space-y-3 text-sm text-[#4A3B32]">
              <li className="flex gap-3">
                <span className="font-bold text-[#D4AF37]">1.</span>
                Escolha o serviço desejado
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#D4AF37]">2.</span>
                Selecione uma data e horário disponível
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#D4AF37]">3.</span>
                Confirme seu agendamento
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#D4AF37]">4.</span>
                Receba confirmação por SMS e email
              </li>
            </ol>
          </Card>
        </div>
      </div>
    </ClientLayout>
  );
}
