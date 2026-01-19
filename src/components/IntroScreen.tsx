import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle, Clock, PlayCircle } from 'lucide-react';
interface IntroScreenProps {
  onStart: (startFresh?: boolean) => void;
  hasSavedProgress?: boolean;
}
export function IntroScreen({
  onStart,
  hasSavedProgress = false
}: IntroScreenProps) {
  return <div className="min-h-screen bg-white flex flex-col pb-20">
      {/* Header */}
      <header className="px-6 py-4 flex items-center border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="4" fill="#FF6B6B" />
            <circle cx="24" cy="8" r="4" fill="#FFD93D" />
            <circle cx="8" cy="24" r="4" fill="#6BCB77" />
            <circle cx="24" cy="24" r="4" fill="#5B4FFF" />
          </svg>
          <span className="font-bold text-xl text-gray-900">Nielsen</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 max-w-2xl mx-auto w-full">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Household Information Update
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A regular part of being in the Nielsen Ratings is making sure your
              household information is kept up to date. This helps us keep
              accurate records and ensures you're able to represent those most
              like you, in your area, with your media choices.
            </p>
          </div>

          {hasSavedProgress && <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <PlayCircle size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Continue Where You Left Off
                  </h3>
                  <p className="text-gray-600">
                    We saved your progress! You can pick up right where you
                    stopped.
                  </p>
                </div>
              </div>
            </div>}

          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-[#5B4FFF]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Quick and Easy
                </h3>
                <p className="text-gray-600">
                  Reviewing your household's information and making updates
                  where needed usually takes only{' '}
                  <strong>10 minutes or so</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-lg">
              What we'll review:
            </h3>
            <div className="space-y-3">
              {['Household members and contact information', 'Current address and mailing address', 'Phone numbers and email addresses', 'Streaming services and TV equipment', 'Media industry connections'].map((item, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>)}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              Thank you for being part of the ratings and helping us keep your
              information current!
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> By completing this Household Information
              Update, you acknowledge that you are at least 18 years old.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Buttons */}
      <div className="fixed bottom-20 left-0 right-0 px-6 bg-white border-t border-gray-100 py-4">
        <div className="max-w-2xl mx-auto space-y-3">
          {hasSavedProgress ? <>
              <Button variant="primary" fullWidth onClick={() => onStart(false)} className="text-lg py-4">
                Continue Survey
              </Button>
              <Button variant="secondary" fullWidth onClick={() => onStart(true)} className="text-base py-3">
                Start Over
              </Button>
            </> : <Button variant="primary" fullWidth onClick={() => onStart(false)} className="text-lg py-4">
              Let's Get Started
            </Button>}
        </div>
      </div>
    </div>;
}