import { Question } from '../types/survey';
import { householdSnapshot } from './householdSnapshot';

export const surveyQuestions: Question[] = [
  // Section 1: Address & Contacts
  {
    id: 'Q_ADDRESS',
    type: 'radio',
    title: `Is your current residential address ${householdSnapshot.residentialAddress}?`,
    prefilledValue: 'Yes',
    options: [
      { id: '1', label: 'Yes', value: 'Yes' },
      { id: '2', label: 'No', value: 'No' }
    ]
  },

  // Section 2: Member Details
  {
    id: 'Q_MEMBER_RELATION',
    type: 'radio',
    title: "What is this person's relation to the head of house?",
    prefilledValue: 'Self',
    options: [
      { id: '1', label: 'Self', value: 'Self' },
      { id: '2', label: 'Spouse', value: 'Spouse' },
      { id: '3', label: 'Son', value: 'Son' },
      { id: '4', label: 'Daughter', value: 'Daughter' },
      { id: '5', label: 'Other Relative', value: 'Other Relative' },
      { id: '6', label: 'Non-relative', value: 'Non-relative' }
    ]
  },
  {
    id: 'Q_MEMBER_OWNER',
    type: 'radio',
    title: 'Is this person one of the people who owns, rents, or is buying this home?',
    prefilledValue: 'Yes',
    options: [
      { id: '1', label: 'Yes', value: 'Yes' },
      { id: '2', label: 'No', value: 'No' }
    ]
  },
  {
    id: 'Q_MEMBER_EDUCATION',
    type: 'radio',
    title: "What is the highest level of education this person has completed?",
    prefilledValue: 'Bachelors',
    options: [
      { id: '1', label: 'Less than High School', value: 'Less than High School' },
      { id: '2', label: 'High School Diploma', value: 'High School Diploma' },
      { id: '3', label: 'Some College', value: 'Some College' },
      { id: '4', label: 'Bachelors', value: 'Bachelors' },
      { id: '5', label: 'Masters', value: 'Masters' },
      { id: '6', label: 'Doctorate', value: 'Doctorate' },
      { id: '7', label: 'Prefer not to answer', value: 'Prefer not to answer' }
    ]
  },
  {
    id: 'Q_MEMBER_RACE',
    type: 'checkbox',
    title: "Which of the following best describes this person's race and ethnicity?",
    subtitle: 'Select all that apply.',
    options: [
      { id: '1', label: 'White', value: 'White' },
      { id: '2', label: 'Black or African American', value: 'Black or African American' },
      { id: '3', label: 'Hispanic or Latino', value: 'Hispanic or Latino' },
      { id: '4', label: 'Asian', value: 'Asian' },
      { id: '5', label: 'Native American or Alaska Native', value: 'Native American or Alaska Native' },
      { id: '6', label: 'Native Hawaiian or Pacific Islander', value: 'Native Hawaiian or Pacific Islander' },
      { id: '7', label: 'Other', value: 'Other' },
      { id: '8', label: 'Prefer not to answer', value: 'Prefer not to answer' }
    ]
  },
  {
    id: 'Q_MEMBER_CONTACT_TIME',
    type: 'radio',
    title: 'What is the best time for a Nielsen representative to contact this person?',
    prefilledValue: '5pm - 8pm',
    options: [
      { id: '1', label: '9am - 12pm', value: '9am - 12pm' },
      { id: '2', label: '12pm - 5pm', value: '12pm - 5pm' },
      { id: '3', label: '5pm - 8pm', value: '5pm - 8pm' },
      { id: '4', label: 'After 8pm', value: 'After 8pm' },
      { id: '5', label: 'N/A', value: 'N/A' }
    ]
  },

  // Section 3: Computers & Smart Displays
  {
    id: 'Q_COMPUTER_LOCATION',
    type: 'text',
    title: 'Where is this device located in your home?',
    prefilledValue: 'Office'
  },
  {
    id: 'Q_COMPUTER_USER',
    type: 'radio',
    title: 'Who in the household uses this device the most?',
    prefilledValue: 'Derek',
    options: [
      { id: '1', label: 'Derek', value: 'Derek' },
      { id: '2', label: 'Daisy', value: 'Daisy' },
      { id: '3', label: 'Plack', value: 'Plack' },
      { id: '4', label: 'Other', value: 'Other' }
    ]
  },
  {
    id: 'Q_COMPUTER_WORK',
    type: 'radio',
    title: 'Is this device used for work-related purposes?',
    options: [
      { id: '1', label: 'Yes', value: 'Yes' },
      { id: '2', label: 'No', value: 'No' }
    ]
  },
  {
    id: 'Q_COMPUTER_OS',
    type: 'radio',
    title: 'What operating system is it running?',
    prefilledValue: 'macOS',
    options: [
      { id: '1', label: 'Windows', value: 'Windows' },
      { id: '2', label: 'macOS', value: 'macOS' },
      { id: '3', label: 'Linux', value: 'Linux' },
      { id: '4', label: 'Chrome OS', value: 'Chrome OS' },
      { id: '5', label: 'Other', value: 'Other' }
    ]
  },
  {
    id: 'Q_COMPUTER_INTERNET_30',
    type: 'radio',
    title: 'Has it been used to access the internet in the past 30 days?',
    prefilledValue: 'Yes',
    options: [
      { id: '1', label: 'Yes', value: 'Yes' },
      { id: '2', label: 'No', value: 'No' }
    ]
  },
  {
    id: 'Q_COMPUTER_PAID_BY',
    type: 'radio',
    title: 'Is the internet paid for by your household, your job, or some other way?',
    prefilledValue: 'Household',
    options: [
      { id: '1', label: 'Household', value: 'Household' },
      { id: '2', label: 'Job', value: 'Job' },
      { id: '3', label: 'Other', value: 'Other' }
    ]
  },

  // Section 4: Phones & Tablets
  {
    id: 'Q_PHONE_NAME',
    type: 'text',
    title: "Please provide a short name for this phone/tablet (e.g., Jane's iPad).",
    prefilledValue: "Derek's iPhone"
  },
  {
    id: 'Q_PHONE_TYPE',
    type: 'radio',
    title: 'Is this an Android, iPhone, or some other type of smartphone/tablet?',
    prefilledValue: 'iPhone',
    options: [
      { id: '1', label: 'Android', value: 'Android' },
      { id: '2', label: 'iPhone', value: 'iPhone' },
      { id: '3', label: 'iPad', value: 'iPad' },
      { id: '4', label: 'Other', value: 'Other' }
    ]
  },
  {
    id: 'Q_PHONE_INTERNET',
    type: 'radio',
    title: 'Do you have access to the internet on this device?',
    prefilledValue: 'Yes',
    options: [
      { id: '1', label: 'Yes', value: 'Yes' },
      { id: '2', label: 'No', value: 'No' }
    ]
  },
  {
    id: 'Q_PHONE_OTHER_USERS',
    type: 'checkbox',
    title: 'Who else in the household uses this device?',
    subtitle: 'Select all that apply.',
    options: [
      { id: '1', label: 'Derek', value: 'Derek' },
      { id: '2', label: 'Daisy', value: 'Daisy' },
      { id: '3', label: 'Plack', value: 'Plack' },
      { id: '4', label: 'No one else', value: 'No one else' }
    ]
  },
  {
    id: 'Q_PHONE_TEXT_PERMISSION',
    type: 'radio',
    title: 'Does this person give Nielsen permission to send text messages to this number?',
    prefilledValue: 'No',
    options: [
      { id: '1', label: 'Yes', value: 'Yes' },
      { id: '2', label: 'No', value: 'No' },
      { id: '3', label: 'N/A', value: 'N/A' }
    ]
  },

  // Section 5: Televisions (Comprehensive)
  {
    id: 'Q_TV_LOCATION',
    type: 'radio',
    title: 'Where is this TV located?',
    prefilledValue: 'Living Room',
    options: [
      { id: '1', label: 'Living Room', value: 'Living Room' },
      { id: '2', label: 'Master Bedroom', value: 'Master Bedroom' },
      { id: '3', label: 'Other Bedroom', value: 'Other Bedroom' },
      { id: '4', label: 'Kitchen', value: 'Kitchen' },
      { id: '5', label: 'Other', value: 'Other' }
    ]
  },
  {
    id: 'Q_TV_INTERNET',
    type: 'radio',
    title: 'Is the television itself connected to the internet?',
    prefilledValue: 'Yes',
    options: [
      { id: '1', label: 'Yes', value: 'Yes' },
      { id: '2', label: 'No', value: 'No' }
    ]
  },
  {
    id: 'Q_TV_STB',
    type: 'radio',
    title: 'Do you have a set top box, satellite box, or cable box at this television?',
    prefilledValue: 'Xfinity Box',
    options: [
      { id: '1', label: 'Yes, Xfinity Box', value: 'Xfinity Box' },
      { id: '2', label: 'Yes, Other', value: 'Yes, Other' },
      { id: '3', label: 'No', value: 'None' }
    ]
  },
  {
    id: 'Q_TV_AUDIO',
    type: 'radio',
    title: 'Do you have an AV receiver or sound bar connected like surround sound speakers?',
    prefilledValue: 'Soundbar',
    options: [
      { id: '1', label: 'Yes, Soundbar', value: 'Soundbar' },
      { id: '2', label: 'Yes, AV Receiver', value: 'AV Receiver' },
      { id: '3', label: 'No', value: 'None' }
    ]
  },
  {
    id: 'Q_TV_DVD',
    type: 'radio',
    title: 'Do you have a DVD player, Blu-ray, or VCR at this television?',
    options: [
      { id: '1', label: 'Yes, DVD Player', value: 'DVD Player' },
      { id: '2', label: 'Yes, Blu-ray', value: 'Blu-ray' },
      { id: '3', label: 'Yes, VCR', value: 'VCR' },
      { id: '4', label: 'No', value: 'No' }
    ]
  },
  {
    id: 'Q_TV_GAME',
    type: 'radio',
    title: 'Do you have a video game system (like a PlayStation or Xbox) at this television?',
    prefilledValue: 'PS5',
    options: [
      { id: '1', label: 'Yes, PlayStation', value: 'PS5' },
      { id: '2', label: 'Yes, Xbox', value: 'Xbox' },
      { id: '3', label: 'Yes, Other', value: 'Yes, Other' },
      { id: '4', label: 'No', value: 'No' }
    ]
  },
  {
    id: 'Q_TV_STREAMING',
    type: 'checkbox',
    title: 'Besides the {{Device}}, do you have any other internet streaming devices like a Roku, Chromecast, or Apple TV?',
    subtitle: 'Select all that apply.',
    prefilledValue: ['Roku 4'],
    options: [
      { id: '1', label: 'Roku', value: 'Roku 4' },
      { id: '2', label: 'Chromecast', value: 'Chromecast' },
      { id: '3', label: 'Apple TV', value: 'Apple TV' },
      { id: '4', label: 'Fire TV Stick', value: 'Fire TV Stick' },
      { id: '5', label: 'Other', value: 'Other' },
      { id: '6', label: 'None', value: 'None' }
    ]
  },
  {
    id: 'Q_TV_HDMI',
    type: 'radio',
    title: 'Do you physically connect a computer or phone to this TV using a cable like an HDMI?',
    options: [
      { id: '1', label: 'Yes', value: 'Yes' },
      { id: '2', label: 'No', value: 'No' }
    ]
  },
  {
    id: 'Q_TV_HEADPHONES',
    type: 'radio',
    title: 'Do you ever use headphones when watching or listening to this television?',
    options: [
      { id: '1', label: 'Yes', value: 'Yes' },
      { id: '2', label: 'No', value: 'No' }
    ]
  },
  {
    id: 'Q_TV_OTHER',
    type: 'radio',
    title: 'Is there anything else connected, such as a camcorder or karaoke machine?',
    options: [
      { id: '1', label: 'Yes', value: 'Yes' },
      { id: '2', label: 'No', value: 'No' }
    ]
  },

  // Section 6: Streaming Subscriptions
  {
    id: 'Q_STREAMING_SVOD',
    type: 'checkbox',
    title: 'Please let me know if anyone in the household has a subscription to or watches any of the following',
    subtitle: 'Select all that apply.',
    prefilledValue: [
      'Amazon Prime Video',
      'Apple TV Plus',
      'Discovery Plus',
      'Hulu',
      'Max or HBO Max',
      'Netflix'
    ],
    options: [
      { id: '1', label: 'Amazon Prime Video', value: 'Amazon Prime Video' },
      { id: '2', label: 'AMC Plus', value: 'AMC Plus' },
      { id: '3', label: 'Apple TV Plus', value: 'Apple TV Plus' },
      { id: '4', label: 'Discovery Plus', value: 'Discovery Plus' },
      { id: '5', label: 'Disney Plus', value: 'Disney Plus' },
      { id: '6', label: 'ESPN Plus', value: 'ESPN Plus' },
      { id: '7', label: 'Hulu', value: 'Hulu' },
      { id: '8', label: 'Max or HBO Max', value: 'Max or HBO Max' },
      { id: '9', label: 'Netflix', value: 'Netflix' },
      { id: '10', label: 'Paramount Plus', value: 'Paramount Plus' },
      { id: '11', label: 'Peacock', value: 'Peacock' },
      { id: '12', label: 'Stars', value: 'Stars' },
      { id: '13', label: 'Vix Premium', value: 'Vix Premium' },
      { id: '14', label: 'None', value: 'None' }
    ]
  },
  {
    id: 'Q_STREAMING_LIVE_TV',
    type: 'checkbox',
    title: 'Does anyone in your household pay for a service to watch direct TV stream, Friendly TV, Fubo TV, Hulu Live TV, Filo TV Sling TV, YouTube television?',
    subtitle: 'Select all that apply.',
    prefilledValue: [
      'DirecTV Stream',
      'Friendly TV',
      'Fubo TV'
    ],
    options: [
      { id: '1', label: 'DirecTV Stream', value: 'DirecTV Stream' },
      { id: '2', label: 'Friendly TV', value: 'Friendly TV' },
      { id: '3', label: 'Fubo TV', value: 'Fubo TV' },
      { id: '4', label: 'Hulu Live TV', value: 'Hulu Live TV' },
      { id: '5', label: 'Philo TV', value: 'Philo TV' },
      { id: '6', label: 'Sling TV', value: 'Sling TV' },
      { id: '7', label: 'YouTube TV', value: 'YouTube TV' },
      { id: '8', label: 'None', value: 'None' }
    ]
  }
];
