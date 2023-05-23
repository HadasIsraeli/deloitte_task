import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import EmployeesList from "./EmployeesList";
import Autocomplete from "./Autocomplete";

const Home = () => {
  const [search, SetSearch] = useState('');
  const [results, setResults] = useState([]);
  // const [err, setErr] = useState(null);
  // const [Pending, setPending] = useState(true);

  const { data: employees, error, isPending } = useFetch('/api/employees');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.fade-in-element');
      if (element) {
        const distanceToTop = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
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
    if (e.target.value == '' || search == '') {
      setResults([]);
    }
    // setPending(true);
    console.log(search);
  }

  const handleAutocompleteResults = (res) => {
    setResults(res);
    console.log(results);
    // const search_results = document.getElementById('search_results');
    // if (res.length < 1) {
    //   search_results.innerHTML = '<P>Sorry, No Employee Found.</P>';
    //   return;
    // }
    // search_results.innerHTML = '<div>found</div>';
  };

  return (
    <div className="home">
      <h1>LOOKING FOR AN EMPLOYEE ? <i class="fa-solid fa-users"></i></h1>
      <p>Click on the search bar to learn our suggestions</p>
      <form className="search" onSubmit={hanndleSubmit}>
        <input type="text" name="search" value={search} placeholder="Search..." onKeyUp={hanndleSubmit} onChange={(e) => SetSearch(e.target.value)} />
        {/* <section id="search_results"></section> */}
        <div className="results">
          {results.map((result) => (
            <div>
              <div className="res" key={result._id}>
                <i class={result.Avatar}></i>
                <h4>{result.Name}</h4>
                <h6>{result.WorkTitle}</h6>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
      {/* {isPending && <p><i class="fa-solid fa-spinner fa-spin-pulse"></i> Loading...</p>}
      {error && <p><i class="fa-solid fa-triangle-exclamation fa-beat"></i> {error}</p>} */}
      <div className="fade-in-element">
        {employees && <EmployeesList employees={employees} title='All Employees' />}
      </div>
      <Autocomplete searchText={search} onResults={handleAutocompleteResults} />
      {/* <div className="results">

        {results && <EmployeesList employees={results} title='' />}
      </div> */}
    </div>
  );
}

export default Home;