import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";


const Homes = () => {
    const foods = useLoaderData().slice(0, 6);
    console.log(foods)
    return (
        <div>
            <Banner></Banner>
            <div className=" mt-5  grid lg:grid-cols-3 gap-5 mx-5 md:grid-cols-2 ">
                {foods.map(food => (
                    <div key={food._id}>
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src={food?.FoodPhotoUrl} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{food?.FoodName}</h2>
                                <div className="flex items-center gap-2">
                                    <img className="rounded-full w-16" src={food?.photoURL} alt="" />
                                    <div>
                                    <h4 className="text-lg font-medium">Name: {food?.userName}</h4>
                                    <h4 ><span className="text-lg font-medium">Pickup Location:</span> {food?.PickupLocation}</h4>
                                    </div>
                                </div>
                                <div className="flex justify-around text-center">
                                    <p> FoodQuantity:{food?.FoodQuantity}</p>
                                    <p> Expired Date:{food?.date}</p>
                                </div>
                                <p>{food?.AdditionalNotes}</p>
                                <div className="card-actions justify-center">
                                    <Link to={`/FoodDetails/${food._id}`} className="btn bg-[#00ffa6]">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    );
};

export default Homes;