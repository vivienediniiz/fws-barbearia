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
        <div className="rounded-2xl border-2 border-dashed border-cream-200 p-8 text-center">
          <p className="text-lg text-taupe-600">Você ainda não tem agendamentos</p>
          <p className="mt-2 text-sm text-taupe-500">
            Agende sua primeira consultoria agora
          </p>
        </div>

        <div className="mt-8 space-y-2">
          <h3 className="font-serif text-lg font-semibold text-taupe-700">
            Como funciona
          </h3>
          <Card>
            <ol className="list-inside space-y-3 text-sm text-taupe-600">
              <li className="flex gap-3">
                <span className="font-bold text-gold-400">1.</span>
                Escolha o serviço desejado
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold-400">2.</span>
                Selecione uma data e horário disponível
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold-400">3.</span>
                Confirme seu agendamento
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold-400">4.</span>
                Receba confirmação por SMS e email
              </li>
            </ol>
          </Card>
        </div>
      </div>
    </ClientLayout>
  );
}
