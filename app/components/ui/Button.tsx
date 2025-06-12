import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon-button';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      type = 'button',
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    let variantName = '';
    switch (variant) {
      case 'primary':
        variantName = 'btn-primary';
        break;
      case 'secondary':
        variantName = 'btn-secondary';
        break;
      case 'outline':
        variantName = 'btn-outline';
        break;
      case 'icon-button':
        variantName = 'icon-button';
        break;
      default:
        variantName = 'btn-primary';
    }
    const sizeClass = sizeStyles[size] || sizeStyles.md;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(variant !== 'icon-button' && sizeClass, variantName, className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
