import { useState } from 'react';
import { Info } from 'lucide-react';

interface FieldWithHintProps {
  label: string;
  value: string;
  hint?: string;
  className?: string;
}

export function FieldWithHint({ label, value, hint, className = '' }: FieldWithHintProps) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-500">{label}</span>
        {hint && (
          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="text-gray-400 hover:text-[#5B4FFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5B4FFF] rounded-full p-0.5"
            aria-label={`Info about ${label}`}
            aria-expanded={showHint}
          >
            <Info size={16} />
          </button>
        )}
      </div>
      {showHint && hint && (
        <div className="mt-1 mb-2 p-3 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-sm text-gray-700 leading-relaxed">{hint}</p>
        </div>
      )}
      <span className="text-base text-gray-900 font-medium">{value || 'Not provided'}</span>
    </div>
  );
}
