import { NavLink } from "react-router-dom";

const ResultsList = ({ results }) => {
    return (
        <div className="results" id="style-15">
            {results.map((result) => (
                <NavLink to={`/employee/${result._id}`} style={{ textDecoration: 'none' }}>

                    <div className="res" key={result._id}>
                        <i class={result.Avatar}></i>
                        <h4>{result.Name}</h4>
                        <h6>{result.WorkTitle}</h6>
                    </div>
                </NavLink>
            ))}

            <h6 className="num-found">found {results.length} employees</h6>
        </div>
    );
}

export default ResultsList;