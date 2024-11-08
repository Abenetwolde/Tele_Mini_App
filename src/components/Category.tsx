import React from 'react';
import CategoryCard from './CategoryCard';
import { HomeOutlined, AppstoreAddOutlined, SettingOutlined } from '@ant-design/icons'; // Sample icons

interface CategoriesProps {
  title: string;
  categories: Array<{ icon: React.ReactNode; id: string | number }>;
}

const Categories: React.FC<CategoriesProps> = ({ title, categories }) => {
  return (
    <div className="w-full px-4 py-6 bg-[var(--tg-theme-secondary-bg-color)]">
      <h4 className="text-left text-1xl font-normal mb-1">
        Categories
      </h4>

      {/* Categories list */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <div key={category.id} className="flex justify-center flex-shrink-0">
            <CategoryCard icon={category.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
