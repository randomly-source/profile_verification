import React, { useEffect, useMemo, useState } from 'react';
import { BottomNavigation, TabType } from './components/BottomNavigation';
import { IntroScreen } from './components/IntroScreen';
import { SurveyLayout } from './components/SurveyLayout';
import { SurveyModal } from './components/SurveyModal';
import { SurveySummary } from './components/SurveySummary';
import { HomePage } from './components/HomePage';
import { RadioGroup } from './components/ui/RadioGroup';
import { CheckboxGroup } from './components/ui/CheckboxGroup';
import { Input } from './components/ui/Input';
import { PhoneList } from './components/ui/PhoneList';
import { EmailList } from './components/ui/EmailList';
import { InfoTooltip } from './components/ui/InfoTooltip';
import { Button } from './components/ui/Button';
import { surveyQuestions } from './data/surveyQuestions';
import { sectionConfig } from './data/sectionConfig';
import { Question, SurveyState } from './types/survey';
import { CheckCircle } from 'lucide-react';
const STORAGE_KEY = 'nielsen_survey_progress';
// Pre-populate all answers with existing data from surveyQuestions
const getInitialAnswers = () => {
  const answers: Record<string, any> = {};
  surveyQuestions.forEach(q => {
    if (q.prefilledValue) {
      answers[q.id] = q.prefilledValue;
    } else if (q.type === 'radio' && q.options && q.options.length > 0) {
      // Default to first option for demo
      answers[q.id] = q.options[0].value;
    }
  });
  return answers;
};
export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [hasSavedProgress, setHasSavedProgress] = useState(false);
  const [showSummary, setShowSummary] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSectionQuestions, setEditingSectionQuestions] = useState<string[]>([]);
  const [sectionQuestionIndex, setSectionQuestionIndex] = useState(0);
  const [state, setState] = useState<SurveyState>({
    currentQuestionIndex: 0,
    answers: getInitialAnswers(),
    language: 'en',
    isComplete: false,
    showIntro: false
  });
  // Load saved progress on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setHasSavedProgress(true);
      } catch (e) {
        console.error('Failed to parse saved progress:', e);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);
  // Save progress whenever state changes (except on intro screen)
  useEffect(() => {
    if (!state.showIntro && !state.isComplete) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);
  // Get section questions filtered by conditional logic
  const sectionQuestions = useMemo(() => {
    if (editingSectionQuestions.length === 0) return [];
    return surveyQuestions.filter(q => {
      // Must be in the section's question list
      if (!editingSectionQuestions.includes(q.id)) return false;
      // Check conditional logic
      if (!q.conditional) return true;
      const dependentAnswer = state.answers[q.conditional.questionId];
      return dependentAnswer === q.conditional.value;
    });
  }, [editingSectionQuestions, state.answers]);
  const currentQuestion = sectionQuestions[sectionQuestionIndex];
  // Initialize prefilled values if not present
  useEffect(() => {
    if (currentQuestion && currentQuestion.prefilledValue && !state.answers[currentQuestion.id]) {
      setState(prev => ({
        ...prev,
        answers: {
          ...prev.answers,
          [currentQuestion.id]: currentQuestion.prefilledValue
        }
      }));
    }
  }, [currentQuestion?.id]);
  const handleAnswer = (value: any) => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: value
      }
    }));
  };
  const handleNext = () => {
    if (sectionQuestionIndex < sectionQuestions.length - 1) {
      setSectionQuestionIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      // Close modal and return to summary
      setIsModalOpen(false);
      setSectionQuestionIndex(0);
      setEditingSectionQuestions([]);
      window.scrollTo(0, 0);
    }
  };
  const handleBack = () => {
    if (sectionQuestionIndex > 0) {
      setSectionQuestionIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };
  const handleStartSurvey = (startFresh: boolean = false) => {
    if (startFresh) {
      setState({
        currentQuestionIndex: 0,
        answers: {},
        language: 'en',
        isComplete: false,
        showIntro: false
      });
      localStorage.removeItem(STORAGE_KEY);
      setHasSavedProgress(false);
      setShowSummary(false);
    } else if (hasSavedProgress) {
      const savedProgress = localStorage.getItem(STORAGE_KEY);
      if (savedProgress) {
        try {
          const parsed = JSON.parse(savedProgress);
          setState({
            ...parsed,
            showIntro: false
          });
          setShowSummary(false);
        } catch (e) {
          console.error('Failed to load saved progress:', e);
          setState(prev => ({
            ...prev,
            showIntro: false
          }));
        }
      }
    } else {
      setState(prev => ({
        ...prev,
        showIntro: false
      }));
      setShowSummary(false);
    }
    window.scrollTo(0, 0);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSectionQuestionIndex(0);
    setEditingSectionQuestions([]);
    window.scrollTo(0, 0);
  };
  const handleEditSection = (sectionId: string) => {
    // Find the section in the config
    const section = sectionConfig.find(s => s.id === sectionId);
    if (!section) {
      console.error(`Section ${sectionId} not found`);
      return;
    }
    
    // Set the questions for this section
    setEditingSectionQuestions(section.questionIds);
    setSectionQuestionIndex(0);
    setIsModalOpen(true);
  };
  const handleFinalSubmit = () => {
    setState(prev => ({
      ...prev,
      isComplete: true
    }));
    setShowSummary(false);
    localStorage.removeItem(STORAGE_KEY);
    window.scrollTo(0, 0);
  };
  const handleUpdateAgain = () => {
    setState({
      currentQuestionIndex: 0,
      answers: getInitialAnswers(),
      language: 'en',
      isComplete: false,
      showIntro: false
    });
    localStorage.removeItem(STORAGE_KEY);
    setHasSavedProgress(false);
    setShowSummary(true);
    window.scrollTo(0, 0);
  };
  const renderQuestionInput = (question: Question) => {
    const value = state.answers[question.id];
    switch (question.type) {
      case 'radio':
        return <RadioGroup name={question.id} options={question.options || []} value={value} onChange={handleAnswer} />;
      case 'checkbox':
        return <CheckboxGroup options={question.options || []} value={value || []} onChange={handleAnswer} />;
      case 'text':
        return <Input label="Your Answer" value={value || ''} onChange={e => handleAnswer(e.target.value)} placeholder="Type here..." />;
      case 'date':
        return <Input type="date" label="Select Date" value={value || ''} onChange={e => handleAnswer(e.target.value)} />;
      case 'phone-list':
        return <PhoneList members={value || question.prefilledValue || []} onChange={handleAnswer} />;
      case 'email-list':
        return <EmailList members={value || question.prefilledValue || []} onChange={handleAnswer} />;
      case 'address':
        return <div className="space-y-4">
            <Input label="Address Line 1" value={value?.address1 || ''} onChange={e => handleAnswer({
            ...value,
            address1: e.target.value
          })} placeholder="123 Main St" />
            <Input label="Address Line 2 (Optional)" value={value?.address2 || ''} onChange={e => handleAnswer({
            ...value,
            address2: e.target.value
          })} placeholder="Apt 4B" />
            <div className="grid grid-cols-2 gap-4">
              <Input label="City" value={value?.city || ''} onChange={e => handleAnswer({
              ...value,
              city: e.target.value
            })} placeholder="City" />
              <Input label="State" value={value?.state || ''} onChange={e => handleAnswer({
              ...value,
              state: e.target.value
            })} placeholder="State" />
            </div>
            <Input label="ZIP Code" value={value?.zip || ''} onChange={e => handleAnswer({
            ...value,
            zip: e.target.value
          })} placeholder="12345" />
          </div>;
      default:
        return null;
    }
  };
  // Show home page
  if (activeTab === 'home') {
    return <>
        <HomePage />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </>;
  }
  
  // Show placeholder for other non-profile tabs
  if (activeTab !== 'profile') {
    return <div className="min-h-screen bg-white flex flex-col items-center justify-center pb-20">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          <p className="text-gray-600">This section is coming soon.</p>
        </div>
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>;
  }
  // Show intro screen
  if (state.showIntro) {
    return <>
        <IntroScreen onStart={handleStartSurvey} hasSavedProgress={hasSavedProgress} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </>;
  }
  // Show summary view
  if (showSummary) {
    return <>
        <SurveySummary answers={state.answers} onEditSection={handleEditSection} onSubmitFinal={handleFinalSubmit} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Survey Form Modal */}
        <SurveyModal isOpen={isModalOpen} onClose={handleCloseModal}>
          {currentQuestion && <SurveyLayout currentStep={sectionQuestionIndex} totalSteps={sectionQuestions.length} language={state.language} onLanguageToggle={lang => setState(prev => ({
          ...prev,
          language: lang
        }))} onNext={handleNext} onBack={handleBack} onExit={handleCloseModal} canGoBack={sectionQuestionIndex > 0} isLastStep={sectionQuestionIndex === sectionQuestions.length - 1} showReturnToSummary={false}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                    {currentQuestion.title}
                    {currentQuestion.infoTooltip && <InfoTooltip term={currentQuestion.infoTooltip.term} definition={currentQuestion.infoTooltip.definition} />}
                  </h2>
                  {currentQuestion.subtitle && <p className="text-lg text-gray-600">
                      {currentQuestion.subtitle}
                    </p>}
                </div>

                <div className="pt-4">
                  {renderQuestionInput(currentQuestion)}
                </div>
              </div>
            </SurveyLayout>}
        </SurveyModal>
      </>;
  }
  // Show final completion screen
  if (state.isComplete) {
    return <>
        <div className="min-h-screen bg-white flex flex-col pb-20">
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
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
              <CheckCircle size={48} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 max-w-md mb-8">
              Your household information has been successfully submitted. We
              appreciate your participation in the Nielsen panel.
            </p>

            <div className="max-w-md w-full">
              <Button variant="secondary" fullWidth onClick={handleUpdateAgain} className="text-base py-3">
                Update Information Again
              </Button>
            </div>
          </div>
        </div>
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </>;
  }
  return null;
}