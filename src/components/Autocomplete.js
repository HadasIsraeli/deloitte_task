import { useRef , useEffect } from "react";

const Autocomplete = ({ searchText,onResults }) => {
    const previousSearchText = useRef(searchText);
    useEffect(() => {
        console.log('Autocomplete:',searchText);
        const fetchSearchResults = async () => {
          try {
            const response = await fetch(`/api/search/${searchText}`);
            if (response.ok) {
              const data = await response.json();
              console.log("Autocomplete search results", data);
              // Process the search results here
              onResults(data);
            } else {
              console.log("Autocomplete Error: Search request failed",response);
              // Handle the error case here
            }
          } catch (error) {
            console.log("Autocomplete Error: ", error);
            // Handle any network or other errors here
          }
        };
    
        if (searchText && searchText !== previousSearchText.current) {
            // Only fetch results if searchText has changed
            previousSearchText.current = searchText;
            fetchSearchResults();
          }
      }, [searchText, onResults]);

    return (
        <div>
            Autocomplete: {searchText}
        </div>
    );
}

export default Autocomplete;