import React from 'react';

interface CategoryCardProps {
  icon: React.ReactNode;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon }) => {
  return (
    <div className="flex items-center justify-center p-2 bg-[var(--tg-theme-bg-color)] text-white rounded-xl shadow-md hover:scale-105 transition-transform">
      <div className="flex items-center justify-center">
        <div className="text-[var(--tg-theme-hint-color)] text-1xl">{icon}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
