import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";


const Myrequest = () => {
    const {user}=useContext(AuthContext) 
    const[foodrequest,setFoodrequest]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myFoodRequest/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFoodrequest(data);
                console.log(data);
            });
    }, );
    return (
        <div>
            {foodrequest.length}
        </div>
    );
};

export default Myrequest;