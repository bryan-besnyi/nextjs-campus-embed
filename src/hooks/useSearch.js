import { useState } from "react";

const useSearch = (initialItems) => {
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setItems(items.filter((item) => item.title.includes(searchTerm)));
  };

  return {
    items,
    searchTerm,
    handleSearchChange,
    handleSearchSubmit,
  };
};

export default useSearch;
