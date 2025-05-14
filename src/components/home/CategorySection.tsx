import React from 'react';
import { categories, getCategoryIcon } from '../../data/categories';
import { Link } from 'react-router-dom';

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of service categories to find exactly what you need
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category.icon);
            
            return (
              <Link 
                key={category.id} 
                to={`/services?category=${category.id}`}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-gray-900 font-medium mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;