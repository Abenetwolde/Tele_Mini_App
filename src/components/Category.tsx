import React from 'react';
import CategoryCard from './CategoryCard';
import { HomeOutlined, AppstoreAddOutlined, SettingOutlined } from '@ant-design/icons'; // Sample icons

const Categories: React.FC = () => {
  return (
    <div className="w-full px-4 py-6">
      <h4 className="text-center text-xl font-semibold mb-4">
        Categories
      </h4>

      {/* Categories list */}
      <div className=" flex item-center  gap-4">
        <div className="flex justify-center">
          <CategoryCard icon={<HomeOutlined />}  />
        </div>
        <div className="flex justify-center">
          <CategoryCard icon={<AppstoreAddOutlined />}  />
        </div>
        <div className="flex justify-center">
          <CategoryCard icon={<SettingOutlined />} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
