export type QuestionType = 'radio' | 'checkbox' | 'text' | 'date' | 'info' | 'address' | 'phone-list' | 'email-list';
export interface Option {
  id: string;
  label: string;
  value: string;
}
export interface HouseholdMember {
  name: string;
  phone?: string;
  email?: string;
}
export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  subtitle?: string;
  options?: Option[];
  infoTooltip?: {
    term: string;
    definition: string;
  };
  prefilledValue?: string | string[] | HouseholdMember[];
  required?: boolean;
  conditional?: {
    questionId: string;
    value: string;
  };
  nextQuestionId?: string;
}
export interface SurveyState {
  currentQuestionIndex: number;
  answers: Record<string, any>;
  language: 'en' | 'es';
  isComplete: boolean;
  showIntro: boolean;
}