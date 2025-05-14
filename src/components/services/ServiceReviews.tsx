import React from 'react';
import { getReviewsByServiceId } from '../../data/reviews';
import { Star } from 'lucide-react';
import { formatDate } from '../../utils/formatters';

interface ServiceReviewsProps {
  serviceId: string;
}

const ServiceReviews: React.FC<ServiceReviewsProps> = ({ serviceId }) => {
  const reviews = getReviewsByServiceId(serviceId);
  
  // Calculate average rating
  const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  // Rating distribution
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => {
    return {
      rating,
      count: reviews.filter(r => Math.floor(r.rating) === rating).length,
      percentage: (reviews.filter(r => Math.floor(r.rating) === rating).length / reviews.length) * 100
    };
  });
  
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
      
      {reviews.length === 0 ? (
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <p className="text-gray-600">No reviews yet. Be the first to leave a review!</p>
        </div>
      ) : (
        <div>
          {/* Reviews Summary */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row">
              {/* Overall Rating */}
              <div className="md:w-1/3 text-center mb-6 md:mb-0">
                <div className="text-5xl font-bold text-gray-900 mb-2">{avgRating.toFixed(1)}</div>
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(avgRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <p className="text-gray-500">{reviews.length} reviews</p>
              </div>
              
              {/* Rating Distribution */}
              <div className="md:w-2/3">
                {ratingCounts.map((item) => (
                  <div key={item.rating} className="flex items-center mb-2">
                    <div className="flex items-center w-16">
                      <span className="text-sm font-medium text-gray-900 mr-1">{item.rating}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div 
                        className="bg-yellow-400 h-2.5 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 w-12">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Review List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start">
                  <div className="mr-4">
                    <img 
                      src={review.userAvatar || 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'} 
                      alt={review.userName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{review.userName}</h4>
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(review.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">{formatDate(review.date)}</span>
                    </div>
                    <p className="text-gray-700 mt-2">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceReviews;