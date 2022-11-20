import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";

const EmpLisitng = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to Remove?')) {
            fetch("http://localhost:5000/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed Successfully')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }

    useEffect(() => {
        fetch("  http://localhost:5000/employee/all").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h3>Details Of Employees</h3>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New Employee</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EmpLisitng;