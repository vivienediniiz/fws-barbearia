'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement registration logic
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-cream-50">
      <Header title="Cadastro" showBack />

      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-taupe-700">
            Crie sua Conta
          </h2>
          <p className="mt-1 text-taupe-600">
            Preencha seus dados para começar sua jornada.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="firstName"
              placeholder="Nome"
              label="Nome"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              name="lastName"
              placeholder="Sobrenome"
              label="Sobrenome"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            type="email"
            name="email"
            placeholder="seu@email.com"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            type="tel"
            name="phone"
            placeholder="(11) 98765-4321"
            label="Telefone"
            value={formData.phone}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="••••••••••••"
            label="Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Input
            type="password"
            name="confirmPassword"
            placeholder="••••••••••••"
            label="Confirmar Senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="my-6 flex items-start gap-3">
            <input type="checkbox" id="terms" className="mt-1" required />
            <label htmlFor="terms" className="text-sm text-taupe-600">
              Concordo com os{' '}
              <Link href="#" className="text-gold-500 hover:text-gold-600">
                Termos de Serviço
              </Link>{' '}
              e a{' '}
              <Link href="#" className="text-gold-500 hover:text-gold-600">
                Política de Privacidade
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={loading}
            className="mt-8"
          >
            {loading ? 'Criando conta...' : 'Criar Conta'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-taupe-600">
          Já tem uma conta?{' '}
          <Link href="/auth/login" className="font-semibold text-gold-500 hover:text-gold-600">
            Entre aqui!
          </Link>
        </p>
      </div>
    </div>
  );
};
