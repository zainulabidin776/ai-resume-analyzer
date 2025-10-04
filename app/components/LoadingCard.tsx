import React from 'react'

const LoadingCard: React.FC = () => {
  return (
    <div className="resume-card animate-pulse">
      <div className="resume-card-header">
        <div className="flex flex-col gap-2 w-full">
                <div className="h-6 bg-gray-200 rounded w-3/4 shimmer-effect"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 shimmer-effect"></div>
        </div>
        <div className="w-16 h-16 bg-gray-200 rounded-full shimmer-effect flex-shrink-0"></div>
      </div>
      <div className="gradient-border">
        <div className="w-full h-[350px] bg-gray-200 shimmer-effect"></div>
      </div>
    </div>
  )
}

export default LoadingCard
