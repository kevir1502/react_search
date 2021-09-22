import { useState } from "react";
import SearchBox from "./Components/SearchBox";
import "./style.css";
import data from "../../data/user.json";
import SearchResult from "./Components/SearchResults";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([]);

  const handleCloseSearch = () => {
    setIsAtTop(false);
    setResults([]);
  };
  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    if (data?.length) {
      const searchTextMinus = searchText.toLowerCase();
      const filteredData = data.filter((value) =>
        value.name.toLowerCase().includes(searchTextMinus) ||
        value.phone.toLowerCase().includes(searchTextMinus) ||
        value.email.toLowerCase().includes(searchTextMinus) ||
        value.username.toLowerCase().includes(searchTextMinus)
      );
      setResults(filteredData);
    }
  };
  console.log(results);
  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} isSearching={isAtTop} />
      <SearchResult results={results} isSearching={isAtTop} />
    </div >
  );
}