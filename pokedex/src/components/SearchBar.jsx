import {SearchIcon} from "./Icons.jsx";


export default function SearchBar() {
  return (
    <>
      <div className="search-container">
        <section className="flex flex-wrap" >
          <input
            type="text"
            placeholder="Search your Pokemon"
            className="search-input px-4 border-2 border-gray-800 rounded-lg mx-4"
          />
          <button className="search-button bg-gray-800 text-gray-200 flex flex-row rounded-lg px-4 hover:scale-110 transition-all ease-in-out">
            <span className="translate-y-1 pr-2"><SearchIcon /></span>
            Search
          </button>
        </section>
      </div>
    </>
  );
}
