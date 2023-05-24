import { useRef, useEffect } from "react";

const Autocomplete = ({ searchText, onResults }) => {
    const previousSearchText = useRef(searchText);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch('/api/search', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ "searchText": searchText })
                });
                if (response.ok) {
                    const data = await response.json();
                    onResults(data);
                } else {
                    //Autocomplete Error: Search request failed
                    onResults([]);
                }
            } catch (error) {
                onResults(null);
            }
        };

        if (searchText && searchText !== previousSearchText.current) {
            previousSearchText.current = searchText;
            if (searchText.length > 1) {
                fetchSearchResults();
            }
        }
    }, [searchText, onResults]);

    return (
        <div>
            Autocomplete: {searchText}
        </div>
    );
}

export default Autocomplete;