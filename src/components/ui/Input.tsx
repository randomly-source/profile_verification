import React, { useEffect, useState, useRef } from 'react';
import { Pencil } from 'lucide-react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isEditable?: boolean;
}
export function Input({
  label,
  isEditable = true,
  className = '',
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleContainerClick = () => {
    if (isEditable && inputRef.current) {
      inputRef.current.focus();
    }
  };
  return <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div onClick={handleContainerClick} className={`
          relative flex items-center rounded-lg border-2 bg-white transition-all duration-200
          ${isFocused ? 'border-[#5B21B6] ring-1 ring-[#5B21B6]' : 'border-gray-300 hover:border-gray-400'}
        `}>
        <input ref={inputRef} className={`
            w-full px-4 py-3 rounded-lg border-none focus:ring-0 text-gray-900 placeholder-gray-400
            ${className}
          `} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} {...props} />
        {isEditable && <div className="pr-4 text-gray-400">
            <Pencil size={18} />
          </div>}
      </div>
    </div>;
}