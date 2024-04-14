import React from 'react'

export const Rating = ({rating}) => {
  return (
    <div>
    {[...Array(rating)].map((_, index) => (
        <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
      ))}
      {[...Array(6 - rating)].map((_, index) => (
        <i key={index + rating} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
      ))}
    </div>
  )
}
