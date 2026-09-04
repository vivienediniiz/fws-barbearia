'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement authentication logic
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-cream-50">
      <Header title="Entrar" showBack />

      <div className="flex-1 px-6 py-8">
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold text-taupe-700">
            Bem-Vinda
          </h2>
          <p className="mt-1 text-taupe-600">
            Acesse sua conta para gerenciar seus agendamentos e protocolos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="email"
            placeholder="example@example.com"
            label="Email ou Número de Telefone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••••••"
              label="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              icon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-taupe-600 hover:text-taupe-700"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm3.31-4.87l3.15 3.15.02-.16c0-1.66-1.34-3-3-3-.05 0-.11.001-.16.02z" />
                    </svg>
                  )}
                </button>
              }
            />
          </div>

          <Link href="#" className="text-right text-sm text-gold-500 hover:text-gold-600">
            Esqueci minha senha
          </Link>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 border-t border-cream-200" />
          <span className="text-sm text-taupe-600">ou acesse com</span>
          <div className="flex-1 border-t border-cream-200" />
        </div>

        <div className="flex justify-center gap-6">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-cream-200 text-gold-400 hover:bg-cream-100">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-cream-200 text-gold-400 hover:bg-cream-100">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-cream-200 text-gold-400 hover:bg-cream-100">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 20v-8.5H8V10h3.5V7.5c0-3.45 2-5.5 5.5-5.5 1.5 0 2.5.5 2.5.5v3h-2c-1.5 0-2 .75-2 2v2.5h3l-.5 3.5h-2.5V20h-4z" />
            </svg>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-taupe-600">
          Ainda não tem uma conta?{' '}
          <Link href="/auth/signup" className="font-semibold text-gold-500 hover:text-gold-600">
            Cadastre-se aqui!
          </Link>
        </p>
      </div>
    </div>
  );
};
