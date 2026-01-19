import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { Edit, Info, ClipboardCheck, CheckCircle } from 'lucide-react';
import { sectionConfig } from '../data/sectionConfig';
import { householdSnapshot } from '../data/householdSnapshot';
import { fieldHints } from '../data/fieldHints';
import { FieldWithHint } from './ui/FieldWithHint';

interface SurveySummaryProps {
  answers: Record<string, any>;
  onEditSection: (sectionId: string) => void;
  onSubmitFinal: () => void;
}

export function SurveySummary({
  answers,
  onEditSection,
  onSubmitFinal
}: SurveySummaryProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(() => {
    // Check if details were previously confirmed
    return localStorage.getItem('nielsen_details_confirmed') === 'true';
  });
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for sticky header + progress bar

      for (let i = sectionConfig.length - 1; i >= 0; i--) {
        const section = sectionConfig[i];
        const element = sectionRefs.current[section.id];
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            setCurrentSectionIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = ((currentSectionIndex + 1) / sectionConfig.length) * 100;

  const handleConfirmDetails = () => {
    setIsConfirmed(true);
    // Save to localStorage to persist the confirmation
    localStorage.setItem('nielsen_details_confirmed', 'true');
    window.scrollTo(0, 0);
  };

  const handleViewDetailsAgain = () => {
    setIsConfirmed(false);
    localStorage.removeItem('nielsen_details_confirmed');
    window.scrollTo(0, 0);
  };

  // Show success screen if confirmed
  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col pb-32">
        {/* Header */}
        <header className="px-6 py-4 flex items-center border-b border-gray-200 bg-white sticky top-0 z-40">
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

        {/* Success Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Saved your changes
          </h1>
          <p className="text-lg text-gray-700 max-w-md mb-2">
            You can revisit anytime to make further changes.
          </p>
          <p className="text-lg text-gray-700 max-w-md mb-2">
            Your Nielsen rep will walk you through any pending question!
          </p>
          <p className="text-lg text-gray-700 max-w-md mb-8">
            We value your patience and cooperation.
          </p>
        </main>

        {/* Footer Button */}
        <div className="fixed bottom-20 left-0 right-0 px-6 bg-white border-t border-gray-100 py-4 z-40">
          <div className="max-w-4xl mx-auto">
            <Button variant="primary" fullWidth onClick={handleViewDetailsAgain} className="py-4">
              View Details Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-32">
      {/* Header */}
      <header className="px-6 py-4 flex items-center border-b border-gray-200 bg-white sticky top-0 z-40">
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

      {/* Progress Bar */}
      <div className="sticky top-[73px] z-30 bg-white border-b border-gray-200">
        <div className="px-6 py-3 max-w-4xl mx-auto">
          <div className="mb-3">
            <h2 className="text-sm font-semibold text-gray-900">
              {sectionConfig[currentSectionIndex]?.title || sectionConfig[0].title}
            </h2>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-600">
              Section {currentSectionIndex + 1} of {sectionConfig.length}
            </span>
            <span className="text-xs font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#5B4FFF] h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            {sectionConfig.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  const element = sectionRefs.current[section.id];
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`text-xs font-medium transition-colors ${
                  index <= currentSectionIndex
                    ? 'text-[#5B4FFF]'
                    : 'text-gray-400'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 pb-32 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <ClipboardCheck size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Your Details
              </h1>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                <Info size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Review Your Information
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>
                      Review each section carefully and use the{' '}
                      <strong>Edit</strong> button to make any changes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>
                      Tap the <Info size={14} className="inline" /> icon next to any field for more information
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Section 1: Home Address */}
          <div
            ref={(el) => (sectionRefs.current[sectionConfig[0].id] = el)}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                {sectionConfig[0].icon}
                <h3 className="font-semibold text-gray-900">
                  {sectionConfig[0].title}
                </h3>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <FieldWithHint
                  label="Household ID"
                  value={householdSnapshot.householdId}
                />
                <Button
                  variant="ghost"
                  onClick={() => onEditSection(sectionConfig[0].id)}
                  className="text-[#5B4FFF] hover:bg-purple-50 text-sm ml-4 flex-shrink-0 animate-edit-highlight relative"
                >
                  <Edit size={14} className="mr-1" />
                  Edit
                </Button>
              </div>
              <FieldWithHint
                label="Primary Contact"
                value={householdSnapshot.primaryContact}
              />
              <FieldWithHint
                label="Residential Address"
                value={householdSnapshot.residentialAddress}
                hint={fieldHints.residentialAddress}
              />
            </div>
          </div>

          {/* Section 2: Household Members */}
          <div
            ref={(el) => (sectionRefs.current[sectionConfig[1].id] = el)}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                {sectionConfig[1].icon}
                <h3 className="font-semibold text-gray-900">
                  {sectionConfig[1].title}
                </h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {householdSnapshot.householdMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{member.name}</h4>
                    <Button
                      variant="ghost"
                      onClick={() => onEditSection(sectionConfig[1].id)}
                      className="text-[#5B4FFF] hover:bg-purple-50 text-sm animate-edit-highlight-delayed relative"
                    >
                      <Edit size={14} className="mr-1" />
                      Edit
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <FieldWithHint
                      label="Relation"
                      value={member.relation}
                      hint={fieldHints.relation}
                    />
                    <FieldWithHint
                      label="Renter/Owner"
                      value={member.renterOwner}
                      hint={fieldHints.renterOwner}
                    />
                    <FieldWithHint
                      label="Gender"
                      value={member.gender}
                      hint={fieldHints.gender}
                    />
                    <FieldWithHint
                      label="Education"
                      value={member.education}
                      hint={fieldHints.education}
                    />
                    <FieldWithHint
                      label="Race"
                      value={member.race && member.race.length > 0 ? member.race.join(', ') : 'Not provided'}
                      hint={fieldHints.race}
                    />
                    <FieldWithHint
                      label="Ethnicity"
                      value={member.ethnicity || 'Not provided'}
                      hint={fieldHints.ethnicity}
                    />
                    <FieldWithHint
                      label="Best Time to Contact"
                      value={member.bestTimeToContact}
                      hint={fieldHints.bestTimeToContact}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Computers & Smart Displays */}
          <div
            ref={(el) => (sectionRefs.current[sectionConfig[2].id] = el)}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                {sectionConfig[2].icon}
                <h3 className="font-semibold text-gray-900">
                  {sectionConfig[2].title}
                </h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {householdSnapshot.computers.map((computer, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{computer.deviceName}</h4>
                    <Button
                      variant="ghost"
                      onClick={() => onEditSection(sectionConfig[2].id)}
                      className="text-[#5B4FFF] hover:bg-purple-50 text-sm animate-edit-highlight-more-delayed relative"
                    >
                      <Edit size={14} className="mr-1" />
                      Edit
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <FieldWithHint
                      label="Type"
                      value={computer.type}
                      hint={fieldHints.deviceType}
                    />
                    <FieldWithHint
                      label="Primary User"
                      value={computer.primaryUser}
                      hint={fieldHints.primaryUser}
                    />
                    <FieldWithHint
                      label="Internet Type"
                      value={computer.internetType}
                      hint={fieldHints.internetType}
                    />
                    <FieldWithHint
                      label="Paid By"
                      value={computer.paidBy}
                      hint={fieldHints.paidBy}
                    />
                    <FieldWithHint
                      label="Used 30 Days?"
                      value={computer.used30Days}
                      hint={fieldHints.used30Days}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Phones & Tablets */}
          <div
            ref={(el) => (sectionRefs.current[sectionConfig[3].id] = el)}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                {sectionConfig[3].icon}
                <h3 className="font-semibold text-gray-900">
                  {sectionConfig[3].title}
                </h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {householdSnapshot.phonesTablets.map((device, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{device.shortName}</h4>
                    <Button
                      variant="ghost"
                      onClick={() => onEditSection(sectionConfig[3].id)}
                      className="text-[#5B4FFF] hover:bg-purple-50 text-sm animate-edit-highlight relative"
                    >
                      <Edit size={14} className="mr-1" />
                      Edit
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <FieldWithHint
                      label="Type"
                      value={device.type}
                      hint={fieldHints.phoneType}
                    />
                    <FieldWithHint
                      label="Primary User"
                      value={device.primaryUser}
                      hint={fieldHints.primaryUser}
                    />
                    <FieldWithHint
                      label="Internet?"
                      value={device.internet}
                      hint={fieldHints.internet}
                    />
                    <FieldWithHint
                      label="30 Day Use?"
                      value={device.used30Days}
                      hint={fieldHints.used30Days}
                    />
                    <FieldWithHint
                      label="Text Permission"
                      value={device.textPermission}
                      hint={fieldHints.textPermission}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Televisions & Peripherals */}
          <div
            ref={(el) => (sectionRefs.current[sectionConfig[4].id] = el)}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                {sectionConfig[4].icon}
                  <h3 className="font-semibold text-gray-900">
                  {sectionConfig[4].title}
                  </h3>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {householdSnapshot.televisions.map((tv, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{tv.location} TV</h4>
                    <Button
                      variant="ghost"
                      onClick={() => onEditSection(sectionConfig[4].id)}
                      className="text-[#5B4FFF] hover:bg-purple-50 text-sm animate-edit-highlight-delayed relative"
                    >
                      <Edit size={14} className="mr-1" />
                      Edit
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <FieldWithHint
                      label="Make"
                      value={tv.make}
                      hint={fieldHints.tvMake}
                    />
                    <FieldWithHint
                      label="Internet?"
                      value={tv.internet}
                      hint={fieldHints.tvInternet}
                    />
                    <FieldWithHint
                      label="STB/Cable"
                      value={tv.stbCable}
                      hint={fieldHints.stbCable}
                    />
                    <FieldWithHint
                      label="Audio"
                      value={tv.audio}
                      hint={fieldHints.audio}
                    />
                    <FieldWithHint
                      label="Game/Stream"
                      value={tv.gameStream}
                      hint={fieldHints.gameStream}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Streaming Subscriptions */}
          <div
            ref={(el) => (sectionRefs.current[sectionConfig[5].id] = el)}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                {sectionConfig[5].icon}
                <h3 className="font-semibold text-gray-900">
                  {sectionConfig[5].title}
                </h3>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">SVOD Subscriptions</h4>
                    <Button
                      variant="ghost"
                      onClick={() => onEditSection(sectionConfig[5].id)}
                      className="text-[#5B4FFF] hover:bg-purple-50 text-sm animate-edit-highlight-more-delayed relative"
                    >
                      <Edit size={14} className="mr-1" />
                      Edit
                    </Button>
                  </div>
                  <FieldWithHint
                    label="Services"
                    value={answers['Q_STREAMING_SVOD'] 
                      ? (Array.isArray(answers['Q_STREAMING_SVOD']) 
                          ? answers['Q_STREAMING_SVOD'].join(', ')
                          : answers['Q_STREAMING_SVOD'])
                      : 'Amazon Prime Video, Apple TV Plus, Discovery Plus, Hulu, Max or HBO Max, Netflix'}
                    hint={fieldHints.svod}
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">Live TV Streaming</h4>
                    <Button
                      variant="ghost"
                      onClick={() => onEditSection(sectionConfig[5].id)}
                      className="text-[#5B4FFF] hover:bg-purple-50 text-sm animate-edit-highlight-more-delayed relative"
                    >
                      <Edit size={14} className="mr-1" />
                  Edit
                </Button>
              </div>
                  <FieldWithHint
                    label="Services"
                    value={answers['Q_STREAMING_LIVE_TV']
                      ? (Array.isArray(answers['Q_STREAMING_LIVE_TV'])
                          ? answers['Q_STREAMING_LIVE_TV'].join(', ')
                          : answers['Q_STREAMING_LIVE_TV'])
                      : 'DirecTV Stream, Friendly TV, Fubo TV'}
                    hint={fieldHints.liveTv}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Button */}
      <div className="fixed bottom-20 left-0 right-0 px-6 bg-white border-t border-gray-100 py-4 z-40">
        <div className="max-w-4xl mx-auto">
          <Button variant="primary" fullWidth onClick={handleConfirmDetails} className="py-4">
            Confirm Details
          </Button>
        </div>
      </div>
    </div>
  );
}
