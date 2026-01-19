import React from 'react';
import { Check } from 'lucide-react';
import { Option } from '../../types/survey';
interface RadioGroupProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  name: string;
}
export function RadioGroup({
  options,
  value,
  onChange,
  name
}: RadioGroupProps) {
  return <div className="space-y-3" role="radiogroup">
      {options.map(option => {
      const isSelected = value === option.value;
      return <label key={option.id} className={`
              relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
              ${isSelected ? 'border-[#5B4FFF] bg-purple-50 shadow-sm' : 'border-gray-200 hover:border-purple-200 hover:bg-gray-50'}
            `}>
            <input type="radio" name={name} value={option.value} checked={isSelected} onChange={() => onChange(option.value)} className="sr-only" />
            <div className={`
                flex-shrink-0 h-6 w-6 rounded-full border-2 mr-4 flex items-center justify-center transition-colors
                ${isSelected ? 'border-[#5B4FFF] bg-[#5B4FFF]' : 'border-gray-300 bg-white'}
              `}>
              {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-white" />}
            </div>
            <span className={`text-base font-medium ${isSelected ? 'text-[#5B4FFF]' : 'text-gray-700'}`}>
              {option.label}
            </span>
          </label>;
    })}
    </div>;
}