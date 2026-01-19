import React from 'react';
import { Input } from './Input';
import { HouseholdMember } from '../../types/survey';
interface EmailListProps {
  members: HouseholdMember[];
  onChange: (members: HouseholdMember[]) => void;
}
export function EmailList({
  members,
  onChange
}: EmailListProps) {
  const handleEmailChange = (index: number, email: string) => {
    const updatedMembers = [...members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      email
    };
    onChange(updatedMembers);
  };
  return <div className="space-y-6">
      {members.map((member, index) => <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">{member.name}</h4>
          <Input label="Email Address" type="email" value={member.email || ''} onChange={e => handleEmailChange(index, e.target.value)} placeholder="email@example.com" isEditable={true} />
        </div>)}
    </div>;
}