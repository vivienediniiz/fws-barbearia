import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block font-sans font-semibold text-taupe-700">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`
              input-field
              ${icon ? 'pl-10' : ''}
              ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : ''}
              ${className}
            `.trim()}
            {...props}
          />
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1 text-xs font-semibold text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
