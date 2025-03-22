import { InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className, ...props }, ref) => {
    const baseStyles = 'bg-slate-800 border border-slate-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent';
    const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';
    const widthStyles = fullWidth ? 'w-full' : '';
    
    const inputStyles = twMerge(
      baseStyles,
      errorStyles,
      widthStyles,
      className
    );
    
    return (
      <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
        {label && (
          <label className="block text-gray-300 mb-2 text-sm font-medium">
            {label}
          </label>
        )}
        <input ref={ref} className={inputStyles} {...props} />
        {error && (
          <p className="mt-1 text-red-500 text-xs">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
