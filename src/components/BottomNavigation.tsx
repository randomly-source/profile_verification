import React from 'react';
import { Home, Tv, HelpCircle, User } from 'lucide-react';
export type TabType = 'home' | 'setup' | 'help' | 'profile';
interface BottomNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}
export function BottomNavigation({
  activeTab,
  onTabChange
}: BottomNavigationProps) {
  const tabs = [{
    id: 'home' as TabType,
    label: 'Home',
    icon: Home
  }, {
    id: 'setup' as TabType,
    label: 'Setup',
    icon: Tv
  }, {
    id: 'help' as TabType,
    label: 'Help',
    icon: HelpCircle
  }, {
    id: 'profile' as TabType,
    label: 'Profile',
    icon: User
  }];
  return <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50">
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto">
        {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return <button key={tab.id} onClick={() => onTabChange(tab.id)} className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${isActive ? 'text-[#5B4FFF]' : 'text-gray-400'}`}>
              <Icon size={24} fill={isActive ? '#5B4FFF' : 'none'} strokeWidth={isActive ? 0 : 2} />
              <span className="text-xs mt-1 font-medium">{tab.label}</span>
            </button>;
      })}
      </div>
    </nav>;
}