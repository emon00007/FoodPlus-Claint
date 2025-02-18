import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Contactss from "../Contacts/Contactss";
import { motion } from "framer-motion"


const Homes = () => {
    const foods = useLoaderData().slice(0, 6);
    
    const [featuredFoods, setFeaturedFoods] = useState([]);
    useEffect(() => {
        
        const sortedFoods = [...foods].sort((a, b) => b.FoodQuantity - a.FoodQuantity);
        
        const topFeaturedFoods = sortedFoods.slice(0, 6);

        setFeaturedFoods(topFeaturedFoods);
    }, []);
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner></Banner>
            
            <div className=" mt-5  grid lg:grid-cols-3 gap-10 mx-5 md:grid-cols-2 ">
                {featuredFoods.map(food => (
                    <div key={food._id}>
                        <motion.div whileHover={{scale:1.1}}>
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img className="w-64 h-64 rounded-lg " src={food?.FoodPhotoUrl} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{food?.FoodName}</h2>
                                <div className="flex items-center gap-2">
                                    <img className="rounded-full h-16 w-16" src={food?.photoURL} alt="" />
                                    <div>
                                    <h4 className="text-lg font-medium">Name: {food?.userName}</h4>
                                    <h4 ><span className="text-lg font-medium">Pickup Location:</span> {food?.PickupLocation}</h4>
                                    </div>
                                </div>
                                <div className="flex justify-around text-center">
                                    <p> FoodQuantity:{food?.FoodQuantity}</p>
                                    
                                    
                                    
                                        
                                        
                                    
                                    <p> Expired Date:{food?.date}</p>
                                </div>
                                <p className=" text-center bg-slate-300 p-3 rounded-2xl border">{food?.FoodStatus} Foods</p>
                                <p>{food?.AdditionalNotes}</p>
                                <div className="card-actions  justify-center">
                                    <Link to={`/FoodDetails/${food._id}`} className="btn bg-[#00ffa6]">View Details</Link>
                                    
                                </div>
                            </div>
                        </div>
                        </motion.div>
                    </div>
                ))}
                  
            </div>
            <div className="text-center my-10"><Link to="/AvailableFoods" className="btn bg-[#00ffa6]">ShowAll button</Link></div>
            <AboutUs></AboutUs>
            <Contactss></Contactss>
        </div>

    );
};

export default Homes;