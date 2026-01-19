import React from 'react';
import { Input } from './Input';
import { HouseholdMember } from '../../types/survey';
interface PhoneListProps {
  members: HouseholdMember[];
  onChange: (members: HouseholdMember[]) => void;
}
export function PhoneList({
  members,
  onChange
}: PhoneListProps) {
  const handlePhoneChange = (index: number, phone: string) => {
    const updatedMembers = [...members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      phone
    };
    onChange(updatedMembers);
  };
  return <div className="space-y-6">
      {members.map((member, index) => <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">{member.name}</h4>
          <Input label="Phone Number" type="tel" value={member.phone || ''} onChange={e => handlePhoneChange(index, e.target.value)} placeholder="(555) 123-4567" isEditable={true} />
        </div>)}
    </div>;
}