import React, { useState } from 'react';
import { Info, X } from 'lucide-react';
interface InfoTooltipProps {
  term: string;
  definition: string;
}
export function InfoTooltip({
  term,
  definition
}: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="inline-flex items-center ml-2 relative">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-[#5B21B6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5B21B6] rounded-full p-1" aria-label={`Info about ${term}`}>
        <Info size={18} />
      </button>

      {isOpen && <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-4 bg-gray-900 text-white text-sm rounded-lg shadow-xl animate-in fade-in zoom-in duration-200">
          <div className="flex justify-between items-start mb-1">
            <span className="font-semibold text-purple-200">{term}</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={14} />
            </button>
          </div>
          <p className="leading-relaxed">{definition}</p>
          <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
        </div>}
    </div>;
}