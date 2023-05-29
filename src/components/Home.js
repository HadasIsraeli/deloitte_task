import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import EmployeesList from "./EmployeesList";
import Autocomplete from "./Autocomplete";
import ResultsList from "./ResultsList";

const Home = () => {
  const [search, SetSearch] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { data: employees, error, isPending } = useFetch('https://deloitte-task-server.onrender.com/api/employees');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.fade-in-element');
      if (element) {
        const distanceToTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (distanceToTop <= windowHeight * 0.1) {
          element.style.opacity = 1;
        } else if (distanceToTop <= windowHeight * 0.2) {
          const opacity = 1 - (distanceToTop - windowHeight * 0.1) / (windowHeight * 0.1);
          element.style.opacity = opacity;
        } else {
          element.style.opacity = 0;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const hanndleSubmit = async (e) => {
    e.preventDefault();
    if (search === '') {
      setResults([]);
      setShowResults(false);
    }
  };

  const handleAutocompleteResults = (res) => {
    setResults(res);
    setShowResults(true);
  };

  const handleBlur = () => {
    setShowResults(false);
  };

  return (
    <div className="home">
      <h1>LOOKING FOR AN EMPLOYEE ? <i class="fa-solid fa-users"></i></h1>
      <p>Click on the search bar to learn our suggestions</p>
      <form className="search" onSubmit={hanndleSubmit}>
        <div className="results-card">
          <div>
            <input type="text" name="search" value={search} placeholder="Search..."
              onKeyUp={hanndleSubmit}
              onChange={(e) => SetSearch(e.target.value)}
              onBlur={handleBlur} />
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>

          </div>
          {results && (results.length > 0) && (search.length > 1) && <ResultsList results={results} />}
          {showResults &&results && (results.length === 0) && (search.length > 1) &&
            <div className="res-not-found">Sorry, No results found.</div>}
        </div>
      </form>
      <div className="fade-in-element">
        {isPending && <p><i class="fa-solid fa-spinner fa-spin-pulse"></i> Loading...</p>}
        {error && <p><i class="fa-solid fa-triangle-exclamation fa-beat"></i> {error}</p>}
        {employees && <EmployeesList employees={employees} title='All Employees' />}
      </div>
      <Autocomplete searchText={search} onResults={handleAutocompleteResults} />
    </div>
  );
}

export default Home;