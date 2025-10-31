// This component handles the search input and functionality
const SearchBar = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
  return (
    <div className="search-bar">
      <form onSubmit={onSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
