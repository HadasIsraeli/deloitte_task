import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import EmployeesList from "./EmployeesList";

const Home = () => {
    const [search, SetSearch] = useState('');
    const [err, setErr] = useState(null);
  const [Pending, setPending] = useState(true);

  const { data: employees, error, isPending } = useFetch('/api/employees');


    const hanndleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);
        console.log(search)
        // const response = await fetch('/api/search/' + search);
        const response = await fetch('/api/employees');

        const json = await response.json();
        console.log("recipes results", (json));
        if (response.ok) {
          setPending(false);
        } else {
          setErr(true);
          setPending(false);
          console.log(error);
        }
    }


    return (
        <div className="home">
            <h1>LOOKING FOR AN EMPLOYEE?</h1>
            <p>Click on the search bar to learn our suggestions</p>
            <form className="search" onSubmit={hanndleSubmit}>
                <input type="text" name="search" value={search} placeholder="Search..." onChange={(e) => SetSearch(e.target.value)} />
                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            {isPending && <p><i class="fa-solid fa-spinner fa-spin-pulse"></i> Loading...</p>}
            {error && <p><i class="fa-solid fa-triangle-exclamation fa-beat"></i> {error}</p>}
            {employees && <EmployeesList employees={employees} title='All employees' />}
        </div>
    );
}

export default Home;