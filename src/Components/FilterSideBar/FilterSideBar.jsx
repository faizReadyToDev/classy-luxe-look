import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function FilterSideBar({ onFilter }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  // Initialize filters from URL parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const categories = params.get('categories')?.split(',') || [];
    const prices = params.get('prices')?.split(',') || [];
    const colors = params.get('colors')?.split(',') || [];

    setSelectedCategories(categories);
    setSelectedPrices(prices);
    setSelectedColors(colors);
  }, []);

  // Update URL parameters and trigger onFilter callback when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategories.length) {
      params.set('categories', selectedCategories.join(','));
    }

    if (selectedPrices.length) {
      params.set('prices', selectedPrices.join(','));
    }

    if (selectedColors.length) {
      params.set('colors', selectedColors.join(','));
    }

    navigate(`${location.pathname}?${params.toString()}`, { replace: true });

    onFilter({
      categories: selectedCategories,
      prices: selectedPrices,
      colors: selectedColors,
    });
  }, [selectedCategories, selectedPrices, selectedColors]);

  // Handler for category filter changes
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (category === 'All') {
        return prev.includes('All') ? [] : ['All'];
      }
      const newCategories = prev.filter((c) => c !== 'All');
      return newCategories.includes(category)
        ? newCategories.filter((c) => c !== category)
        : [...newCategories, category];
    });
  };

  // Handler for price filter changes
  const handlePriceChange = (priceRange) => {
    setSelectedPrices((prev) =>
      prev.includes(priceRange)
        ? prev.filter((p) => p !== priceRange)
        : [...prev, priceRange]
    );
  };

  // Handler for color filter changes
  const handleColorChange = (color) => {
    const lowerColor = color.toLowerCase();
    setSelectedColors((prev) =>
      prev.includes(lowerColor)
        ? prev.filter((c) => c !== lowerColor)
        : [...prev, lowerColor]
    );
  };

  return (
    <div className="w-[20vw] h-[70vh] bg-white mt-10 items-center border-r border-[var(--color-price)] max-sm:hidden">
      <h1 className="text-2xl font-extrabold text-center mb-10 w-[14vw]">Filter</h1>

      {/* Categories Filter */}
      <div className="flex flex-col items-center justify-end">
        <h1 className="text-xl font-bold text-start mb-5 w-[10vw]">Categories</h1>
        {['All', 'T-shirts', 'Lowers', 'Hoodies'].map((category) => (
          <div key={category} className="flex gap-2 justify-between w-[10vw]">
            <label htmlFor={category.toLowerCase()}>{category}</label>
            <input
              type="checkbox"
              id={category.toLowerCase()}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="flex flex-col items-center justify-end mt-5">
        <h1 className="text-xl font-bold text-start mb-5 w-[10vw]">Price</h1>
        {['0-599', '500-999', '1000-1499'].map((range) => (
          <div key={range} className="flex gap-2 justify-between w-[10vw]">
            <label htmlFor={`price-${range}`}>{range.replace('-', ' - ₹')}</label>
            <input
              type="checkbox"
              id={`price-${range}`}
              value={range}
              checked={selectedPrices.includes(range)}
              onChange={() => handlePriceChange(range)}
            />
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="flex flex-col items-center justify-end mt-5">
        <h1 className="text-xl font-bold text-start mb-5 w-[10vw]">Colour</h1>
        {['Red', 'Black', 'White'].map((color) => (
          <div key={color} className="flex gap-2 justify-between w-[10vw]">
            <label htmlFor={color.toLowerCase()}>{color}</label>
            <input
              type="checkbox"
              id={color.toLowerCase()}
              value={color.toLowerCase()}
              checked={selectedColors.includes(color.toLowerCase())}
              onChange={() => handleColorChange(color)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterSideBar;
