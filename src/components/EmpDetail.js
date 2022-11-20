import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EmpDetail = () => {
   const { empid } = useParams();
   const [empdata, empdatachange] = useState({});

   useEffect(() => {
      fetch(" http://localhost:5000/employee/" + empid).then((res) => {
         return res.json();
      }).then((resp) => {
         empdatachange(resp);
      }).catch((err) => {
         console.log(err.message);
      })
   }, []);

   return (
      <>
         <div className="card" style={{ "text-align": "left" }}>
            <div className="card-body"></div>
            {empdata &&
               <div>
                  <h4>Employee Name: {empdata.name} ({empdata.id})</h4>
                  <h4>Email: {empdata.email}</h4>
                  <h4>Phone: {empdata.phone}</h4>
                  <Link className="btn btn-danger" to="/">Back to Listing</Link>
               </div>

            }
         </div>
      </>
   )
}

export default EmpDetail;