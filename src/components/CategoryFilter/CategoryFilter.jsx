// This component displays category filters as clickable buttons
const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      <h3 className="filter-title">Shop by Category</h3>
      <div className="category-buttons">
        {/* All Categories Button */}
        <button
          className={`category-btn ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => onCategoryChange("all")}
        >
          All Products
        </button>

        {/* Dynamic Category Buttons */}
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
