import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: Option[];
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  containerClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  helperText,
  error,
  fullWidth = false,
  onChange,
  containerClassName = '',
  className = '',
  id,
  ...props
}) => {
  // Generate a random ID if not provided
  const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;
  
  // Base classes
  const baseClasses = 'block rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm';
  
  // Error classes
  const errorClasses = error ? 'border-red-300 text-red-900' : 'border-gray-300';
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Handle change event
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  return (
    <div className={`${containerClassName} ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`${baseClasses} ${errorClasses} ${widthClasses} ${className}`}
        onChange={handleChange}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600" id={`${selectId}-error`}>
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500" id={`${selectId}-helper`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Select;