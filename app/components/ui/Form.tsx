import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({
    children,
    className = '',
    size = 'md',
    ...props
  }, ref) => (
    <label
      ref={ref}
      className={cn(`text-${size}`, className)}
      {...props}
    >
      {children}
    </label>
  )
);
Label.displayName = 'Label';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, id, className = '', size = 'md', ...props }, ref) => (
    <div>
      {label && (
        <Label htmlFor={id} size={size}>
          {label}
        </Label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(sizeStyles[size], className)}
        {...props}
      />
    </div>
  )
);
TextField.displayName = 'TextField';

export default TextField;
