export const fieldHints: Record<string, string> = {
  // Household Members
  'renterOwner': 'Does this person own, rent, or is buying this home?',
  'bestTimeToContact': 'The best time for a Nielsen representative to contact this person',
  'relation': 'This person\'s relationship to the head of household',
  'education': 'The highest level of education this person has completed',
  'gender': 'This person\'s gender',
  'race': 'This person\'s race - select all that apply',
  'ethnicity': 'This person\'s ethnicity - Hispanic or Latino, or Not Hispanic or Latino',
  
  // Computers & Smart Displays
  'internetType': 'Type of internet connection (Fiber Optic, Cable, DSL, Satellite, etc.)',
  'paidBy': 'Who pays for the internet service - household, job, or other way',
  'used30Days': 'Has this device been used to access the internet in the past 30 days?',
  'primaryUser': 'The household member who uses this device the most',
  'deviceType': 'Type of device (Desktop, Laptop, Tablet, etc.)',
  'deviceLocation': 'Where in the home this device is located',
  
  // Phones & Tablets
  'textPermission': 'Permission to send text messages to this phone number',
  'internet': 'Does this device have access to the internet?',
  'phoneType': 'Type of device (Smartphone, Tablet, etc.)',
  
  // Televisions & Peripherals
  'stbCable': 'Set-top box, satellite box, or cable box connected to this TV',
  'audio': 'Audio equipment connected (Soundbar, AV Receiver, Surround Sound, etc.)',
  'gameStream': 'Video game systems (PlayStation, Xbox) or streaming devices (Roku, Chromecast, Apple TV, Fire TV Stick)',
  'tvInternet': 'Is the television itself connected to the internet?',
  'tvLocation': 'Where in the home this TV is located',
  'tvMake': 'Brand/manufacturer of the television',
  
  // Streaming Subscriptions
  'svod': 'Subscription Video On Demand - services like Netflix, Hulu, Disney+ where you pay a monthly fee',
  'liveTv': 'Live TV streaming services - services that provide live television channels over the internet',
  
  // General
  'residentialAddress': 'Your current residential address where you live'
};
