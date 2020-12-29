import React from 'react';
import StarRating from 'react-star-ratings';

export const showAverage = (p) => {
  if (p && p.ratings) {
    const ratingsArray = p.ratings;
    const total = [];
    const length = ratingsArray.length;

    ratingsArray.map((r) => total.push(r.star));
    const totalReduced = total.reduce((p, n) => p + n, 0);

    const averageRating = totalReduced / length;

    return (
      <div className='text-center pt-1 pb-3'>
        <span>
          <StarRating
            starDimension='20px'
            starSpacing='2px'
            starRatedColor='red'
            rating={averageRating}
            editing={false}
          />{' '}
          ({p.ratings.length})
        </span>
      </div>
    );
  }
};
