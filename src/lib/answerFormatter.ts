import { Question } from '../types/survey';
import { surveyQuestions } from '../data/surveyQuestions';

/**
 * Formats an answer value for display based on its type and question configuration
 */
export function formatAnswer(
  questionId: string,
  value: any,
  question?: Question
): string {
  // Get question if not provided
  const q = question || surveyQuestions.find(q => q.id === questionId);

  if (value === null || value === undefined || value === '') {
    return 'Not answered';
  }

  // Handle arrays
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return 'None selected';
    }
    
    // Check if it's household members (phone/email list)
    if (value[0]?.name) {
      return value
        .map(m => {
          if (m.phone) {
            return `${m.name}: ${m.phone}`;
          }
          if (m.email) {
            return `${m.name}: ${m.email}`;
          }
          return m.name;
        })
        .join(', ');
    }
    
    // For checkbox arrays, return joined values
    return value.join(', ');
  }

  // Handle objects
  if (typeof value === 'object' && value !== null) {
    // Address object
    if (value.address1 !== undefined) {
      const parts: string[] = [];
      if (value.address1) parts.push(value.address1);
      if (value.address2) parts.push(value.address2);
      if (value.city) parts.push(value.city);
      if (value.state) parts.push(value.state);
      if (value.zip) parts.push(value.zip);
      return parts.join(', ') || 'Not answered';
    }
    
    // Other objects - stringify as fallback
    return JSON.stringify(value);
  }

  // Handle dates
  if (q?.type === 'date' && typeof value === 'string') {
    try {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric'
        });
      }
    } catch (e) {
      // Fall through to default string handling
    }
  }

  // For radio/checkbox, try to find the label from options
  if (q && (q.type === 'radio' || q.type === 'checkbox')) {
    if (q.options) {
      const option = q.options.find(opt => opt.value === value);
      if (option) {
        return option.label;
      }
    }
  }

  // Default: convert to string
  return value?.toString() || 'Not answered';
}

/**
 * Formats multiple answers for a subsection
 */
export function formatSubsectionAnswers(
  questionIds: string[],
  answers: Record<string, any>
): Array<{ label: string; value: string; questionId: string }> {
  const formatted: Array<{ label: string; value: string; questionId: string }> = [];

  questionIds.forEach(questionId => {
    const question = surveyQuestions.find(q => q.id === questionId);
    if (!question) return;

    const answer = answers[questionId];
    
    // Skip conditional questions that don't meet their condition
    if (question.conditional) {
      const dependentAnswer = answers[question.conditional.questionId];
      if (dependentAnswer !== question.conditional.value) {
        return; // Skip this question
      }
    }

    // Format the answer
    const formattedValue = formatAnswer(questionId, answer, question);
    
    // Use question title as label, or a shortened version
    let label = question.title;
    if (label.length > 60) {
      label = label.substring(0, 57) + '...';
    }

    formatted.push({
      label,
      value: formattedValue,
      questionId
    });
  });

  return formatted;
}
