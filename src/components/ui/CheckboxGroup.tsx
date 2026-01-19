import React from 'react';
import { Check } from 'lucide-react';
import { Option } from '../../types/survey';
interface CheckboxGroupProps {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
}
export function CheckboxGroup({
  options,
  value = [],
  onChange
}: CheckboxGroupProps) {
  const toggleValue = (optionValue: string) => {
    if (optionValue === 'None') {
      onChange(['None']);
      return;
    }
    let newValue = [...value];
    if (newValue.includes('None')) {
      newValue = newValue.filter(v => v !== 'None');
    }
    if (newValue.includes(optionValue)) {
      newValue = newValue.filter(v => v !== optionValue);
    } else {
      newValue.push(optionValue);
    }
    onChange(newValue);
  };
  return <div className="space-y-3" role="group">
      {options.map(option => {
      const isSelected = value.includes(option.value);
      return <label key={option.id} className={`
              relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
              ${isSelected ? 'border-[#5B4FFF] bg-purple-50 shadow-sm' : 'border-gray-200 hover:border-purple-200 hover:bg-gray-50'}
            `}>
            <input type="checkbox" checked={isSelected} onChange={() => toggleValue(option.value)} className="sr-only" />
            <div className={`
                flex-shrink-0 h-6 w-6 rounded-md border-2 mr-4 flex items-center justify-center transition-colors
                ${isSelected ? 'border-[#5B4FFF] bg-[#5B4FFF]' : 'border-gray-300 bg-white'}
              `}>
              {isSelected && <Check size={16} className="text-white" />}
            </div>
            <span className={`text-base font-medium ${isSelected ? 'text-[#5B4FFF]' : 'text-gray-700'}`}>
              {option.label}
            </span>
          </label>;
    })}
    </div>;
}