import React from 'react';
interface ProgressBarProps {
  current: number;
  total: number;
}
export function ProgressBar({
  current,
  total
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, current / total * 100));
  return <div className="w-full h-[2px] bg-gray-200 fixed top-0 left-0 z-50">
      <div className="h-full bg-[#5B4FFF] transition-all duration-300 ease-out" style={{
      width: `${percentage}%`
    }} />
    </div>;
}