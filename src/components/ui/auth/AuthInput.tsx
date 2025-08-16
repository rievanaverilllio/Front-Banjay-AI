import type React from 'react';

export default function AuthInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled,
  rightIcon,
  inputProps,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div>
      <label className="block text-xs text-gray-600 mb-1">{label}</label>
      <div className="relative">
        <input
          type={type}
          className="w-full px-4 py-2 rounded bg-gray-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...inputProps}
        />
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
}
