import React from 'react';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightIcon?: React.ReactNode;
  onRightClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  onBack,
  rightIcon,
  onRightClick,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-subtle">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          {showBack && (
            <button
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-cream-100"
            >
              <svg
                className="h-6 w-6 text-taupe-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          {title && (
            <h1 className="font-serif text-xl font-semibold text-taupe-700">
              {title}
            </h1>
          )}
        </div>
        {rightIcon && (
          <button
            onClick={onRightClick}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-cream-100"
          >
            {rightIcon}
          </button>
        )}
      </div>
    </header>
  );
};
