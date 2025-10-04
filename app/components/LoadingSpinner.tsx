import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`}></div>
        <div className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-r-purple-400 rounded-full animate-spin`} style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      {text && (
        <p className="text-gray-600 font-medium animate-pulse">{text}</p>
      )}
    </div>
  )
}

export default LoadingSpinner
