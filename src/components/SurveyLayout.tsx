import React, { useState } from 'react';
import { ProgressBar } from './ui/ProgressBar';
import { LanguageToggle } from './LanguageToggle';
import { Button } from './ui/Button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
interface SurveyLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  language: 'en' | 'es';
  onLanguageToggle: (lang: 'en' | 'es') => void;
  onNext: () => void;
  onBack: () => void;
  onExit: () => void;
  canGoBack: boolean;
  isNextDisabled?: boolean;
  isLastStep?: boolean;
  showReturnToSummary?: boolean;
  onReturnToSummary?: () => void;
}
export function SurveyLayout({
  children,
  currentStep,
  totalSteps,
  language,
  onLanguageToggle,
  onNext,
  onBack,
  onExit,
  canGoBack,
  isNextDisabled = false,
  isLastStep = false,
  showReturnToSummary = false,
  onReturnToSummary
}: SurveyLayoutProps) {
  return <div className="min-h-screen bg-white flex flex-col">
      <ProgressBar current={currentStep + 1} total={totalSteps} />

      {/* Header */}
      

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-w-2xl mx-auto w-full p-6">
        <div className="flex-1">{children}</div>
      </main>

      {/* Footer Navigation */}
      <footer className="px-6 bg-white border-t border-gray-100 py-4 sticky bottom-0">
        <div className="max-w-2xl mx-auto flex gap-4">
          {canGoBack && <Button variant="secondary" onClick={onBack} className="flex-1 sm:flex-none sm:w-32">
              <ChevronLeft size={20} className="mr-1" />
              Back
            </Button>}
          <Button variant="primary" onClick={onNext} disabled={isNextDisabled} className={`flex-1 ${!canGoBack ? 'w-full' : ''}`}>
            {isLastStep ? 'Save Changes' : 'Next'}
            {!isLastStep && <ChevronRight size={20} className="ml-1" />}
          </Button>
        </div>
      </footer>
    </div>;
}