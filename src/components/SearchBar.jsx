/* eslint-disable react/prop-types */
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      className="rounded-l-md w-80 px-4 py-[9px] my-2 border border-gray-300 text-lg"
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
      placeholder="Search tasks..."
    />
  );
};

export default SearchBar;
