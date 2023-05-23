import { NavLink } from "react-router-dom";

const EmployeesList = ({ employees, title }) => {

    return (
        <div className="employee-list">
            <h1>{title}</h1>
            <div className="employee-card">
                {employees.map((employee) => (
                    <NavLink to={`/employee/${employee._id}`} style={{ textDecoration: 'none' }}>
                        <div className="polaroid-card" key={employee._id} >
                            <div className="avatar">
                                {employee.Avatar && <i class={employee.Avatar}></i>}
                            </div>
                            <div className="caption-container">
                                <h2>{employee.Name}</h2>
                                <h5>{employee.WorkTitle}</h5>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default EmployeesList;