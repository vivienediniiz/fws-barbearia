import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'font-semibold transition-all duration-200 rounded-pill';

    const variants = {
      primary: 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-white hover:shadow-lg active:scale-95',
      secondary: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#FAF8F5] active:bg-[#F5F2ED]',
      tertiary: 'text-[#3D2C22] hover:bg-[#F5F2ED] active:bg-[#E8A8A8]/20',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-8 py-4 text-lg w-full',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
