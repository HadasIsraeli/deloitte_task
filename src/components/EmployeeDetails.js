import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const EmployeeDetails = () => {
    const { id } = useParams();
    const { data: employee, error, isPending } = useFetch('/api/employee/' + id);

    return (
        <div className="employee-details">
            {isPending && <div><i class="fa-solid fa-spinner fa-spin-pulse"></i> Loading...</div>}
            {error && <div><i class="fa-solid fa-triangle-exclamation fa-beat"></i> Error! {error} trying again...</div>}
            {employee &&
                <div className="employee-res" key={employee._id}>
                    <div className="name-avater">
                        <i class={employee.Avatar}></i>
                        <h4>{employee.Name}</h4>
                    </div>
                    <p><i class="fa-solid fa-chalkboard-user"></i> {employee.WorkTitle}</p>
                    <p><i class="fa-solid fa-house-user"></i> {employee.Address}</p>
                    <p><i class="fa-solid fa-utensils"></i> {employee.Food}</p>
                    <p><i class="fa-solid fa-heart"></i> {employee.Hobby}</p>

                </div>
            }
        </div>
    );
}

export default EmployeeDetails;