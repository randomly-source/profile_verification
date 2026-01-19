import React from 'react';
import { X } from 'lucide-react';
interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export function SurveyModal({
  isOpen,
  onClose,
  children
}: SurveyModalProps) {
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

      {/* Modal Content - slides up from bottom, covers entire viewport including bottom nav */}
      <div className="absolute inset-x-0 bottom-0 top-0 flex items-end pt-20">
        <div className="relative bg-white w-full h-full rounded-t-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors" aria-label="Close modal">
            <X size={24} />
          </button>

          {/* Drag Handle */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-300 rounded-full" />

          {/* Content */}
          <div className="h-full overflow-y-auto pt-8">{children}</div>
        </div>
      </div>
    </div>;
}