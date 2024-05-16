import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
    const {user}=useContext(AuthContext) 
    const[available,setAvailable]=useState([])
    const [searchOption, setSearchOption] = useState('')
    const [sortByDate, setSortByDate] = useState(false);
    const handleSearchInputChange = (event) => {
        setSearchOption(event.target.value);
    };
    const handleSortByDate = () => {
        
        setSortByDate(!sortByDate);
    };
    useEffect(() => {
        fetch(`http://localhost:5000/myFoodRequest/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                const sortedData = sortByDate ? data.sort((a, b) => new Date(a.date) - new Date(b.date)) : data;
                setAvailable(sortedData);
                // setAvailable(data);
                console.log(data);
            });
    }, [user, sortByDate]);
    return (
       <div>
        <input
        className="p-3 bg-slate-400 border border-black rounded-3xl"
                type="text"
                placeholder="Search food items"
                value={searchOption}
                onChange={handleSearchInputChange}
            />
            <button onClick={handleSortByDate} className="bg-blue-500 text-white p-3 rounded-md mt-2">Sort by Date</button>
         <div className=" mt-5  grid lg:grid-cols-3 gap-5 mx-5 md:grid-cols-2 ">
            
            
            {
              available?.filter(food => food.FoodName.toLowerCase().includes(searchOption.toLowerCase()))
              .map  (availableFood=>(
                <div key={availableFood?._id}>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img className="w-64 h-64 rounded-lg " src={availableFood?.FoodPhotoUrl} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{availableFood?.FoodName}</h2>
                                <div className="flex items-center gap-2">
                                    <img className="rounded-full h-16 w-16" src={availableFood?.photoURL} alt="" />
                                    <div>
                                    <h4 className="text-lg font-medium">Name: {availableFood?.userName}</h4>
                                    <h4 className="font-medium"><span className="text-lg font-medium">Pickup Location:</span> {availableFood?.PickupLocation}</h4>
                                    </div>
                                </div>
                                <div className="flex bg-slate-300 py-3 rounded-3xl justify-around text-center">
                                    <p className="font-medium"> FoodQuantity:{availableFood?.FoodQuantity}</p>
                                    
                                    
                                    <p className="font-medium"> Expired Date:{availableFood?.date}</p>
                                </div>
                                
                                <p>{availableFood?.AdditionalNotes}</p>
                                <div className="card-actions  justify-center">
                                    <Link to={`/FoodDetails/${availableFood._id}`} className="btn bg-[#00ffa6]">View Details</Link>
                                    
                                </div>
                            </div>
                        </div>
                </div>
              ))
            }
        </div>
       </div>
    );
};

export default AvailableFoods;