import { useState, useEffect } from "react";

function useSearch(initialItems) {
  const [allItems, setAllItems] = useState(initialItems); // Store all fetched items
  const [filteredItems, setFilteredItems] = useState(initialItems); // Items to display
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(""); // New state for handling errors

  useEffect(() => {
    fetch(`https://site-index.smccd.edu/api/indexItems`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAllItems(data);
        setFilteredItems(data); // Initially, filtered items are the same as all items
      })
      .catch((error) => {
        setError("Failed to fetch sites"); // Set error state
        console.error("Failed to fetch sites", error);
      });
  }, []);

  useEffect(() => {
    // Debounce search or use a submit button to trigger this
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        const searchLowerCase = searchTerm.toLowerCase();
        setFilteredItems(
          allItems.filter((item) =>
            item.title.toLowerCase().includes(searchLowerCase)
          )
        );
      } else {
        setFilteredItems(allItems); // Reset to all items if search is cleared
      }
    }, 300); // Debounce timeout

    return () => clearTimeout(timeoutId); // Cleanup on unmount or next effect
  }, [searchTerm, allItems]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Removed handleSearchSubmit since we are now filtering in the effect hook

  return {
    items: filteredItems, // Return filtered items for display
    searchTerm,
    handleSearchChange,
    error, // Return error for potential display in UI
  };
}

export default useSearch;
