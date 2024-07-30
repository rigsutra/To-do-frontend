/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome component
import todoImg from "../assets/todo.png"; // Import logo image
import profilePic from "../assets/poto.jpg"; // Import profile picture

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-between items-center bg-slate-400 p-4 rounded-lg mx-10 shadow-lg">
      <div className="flex items-center ml-7">
        <img src={todoImg} alt="Todo List" width="50" className="mr-2" />
        <h1 className="text-xl font-bold text-white">Todo List</h1>
      </div>
      <div className="flex items-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="flex items-center bg-slate-500 rounded-r-lg border-none p-3 shadow-md">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#1f3b51" }}
            size="xl"
          />
        </div>
      </div>
      <div className="flex items-center mr-10">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-full border shadow-md"
          width="50"
        />
        <button className="ml-7 rounded-md bg-slate-600 text-white py-2 px-4 transition-transform transform hover:scale-105 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl active:scale-95 active:shadow-md">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
