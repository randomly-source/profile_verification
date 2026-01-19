export interface HouseholdMember {
  name: string;
  relation: string;
  renterOwner: string; // "Yes" or "No"
  gender: string;
  education: string;
  race: string[];
  ethnicity: string;
  bestTimeToContact: string;
}

export interface Computer {
  deviceName: string;
  type: string;
  primaryUser: string;
  internetType: string;
  paidBy: string;
  used30Days: string;
}

export interface PhoneTablet {
  shortName: string;
  type: string;
  primaryUser: string;
  internet: string;
  used30Days: string;
  textPermission: string;
}

export interface Television {
  location: string;
  make: string;
  internet: string;
  stbCable: string;
  audio: string;
  gameStream: string;
}

export interface HouseholdSnapshot {
  householdId: string;
  primaryContact: string;
  residentialAddress: string;
  householdMembers: HouseholdMember[];
  computers: Computer[];
  phonesTablets: PhoneTablet[];
  televisions: Television[];
}

export const householdSnapshot: HouseholdSnapshot = {
  householdId: '123123',
  primaryContact: 'Derek Bale',
  residentialAddress: '742 Evergreen, North Blvd, Austin, TX 14801',
  householdMembers: [
    {
      name: 'Derek Bale',
      relation: 'Self',
      renterOwner: 'Yes',
      gender: 'Male',
      education: 'Bachelors',
      race: ['White'],
      ethnicity: 'Not Hispanic or Latino',
      bestTimeToContact: '5pm - 8pm'
    },
    {
      name: 'Daisy Bale',
      relation: 'Spouse',
      renterOwner: 'No',
      gender: 'Female',
      education: 'Masters',
      race: ['White'],
      ethnicity: 'Not Hispanic or Latino',
      bestTimeToContact: '9am - 12pm'
    },
    {
      name: 'Plack Clariy',
      relation: 'Son',
      renterOwner: 'No',
      gender: 'Male',
      education: '[Empty]',
      race: [],
      ethnicity: 'Not provided',
      bestTimeToContact: 'N/A'
    }
  ],
  computers: [
    {
      deviceName: 'Office iMac',
      type: 'Desktop',
      primaryUser: 'Derek',
      internetType: 'Fiber Optic',
      paidBy: 'Household',
      used30Days: 'Yes'
    },
    {
      deviceName: 'School Laptop',
      type: 'Laptop',
      primaryUser: 'Plack',
      internetType: 'Fiber Optic',
      paidBy: 'Household',
      used30Days: 'Yes'
    }
  ],
  phonesTablets: [
    {
      shortName: "Derek's iPhone",
      type: 'Smartphone',
      primaryUser: 'Derek',
      internet: 'Yes',
      used30Days: 'Yes',
      textPermission: 'No'
    },
    {
      shortName: "Daisy's S23",
      type: 'Smartphone',
      primaryUser: 'Daisy',
      internet: 'Yes',
      used30Days: 'Yes',
      textPermission: 'Yes'
    },
    {
      shortName: "Plack's iPad",
      type: 'Tablet',
      primaryUser: 'Plack',
      internet: 'Yes',
      used30Days: 'Yes',
      textPermission: 'N/A'
    }
  ],
  televisions: [
    {
      location: 'Living Room',
      make: 'LG',
      internet: 'Yes',
      stbCable: 'Xfinity Box',
      audio: 'Soundbar',
      gameStream: 'PS5 & Roku 4'
    },
    {
      location: 'Master Bedroom',
      make: 'Samsung',
      internet: 'Yes',
      stbCable: 'None',
      audio: 'None',
      gameStream: 'Chromecast'
    }
  ]
};
