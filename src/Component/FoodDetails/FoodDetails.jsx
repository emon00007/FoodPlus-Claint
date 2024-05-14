import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineMailOpen } from "react-icons/hi";


const FoodDetails = () => {
    const { id } = useParams();
    const [foodDetails, setFoodDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/FoodDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setFoodDetails(data);
                console.log(data);
            });
    }, [id]);
    return (

        <div>
            <div className="flex items-center md:flex-row flex-col gap-2 ">
                <div className="w-1/2">
                    <img className="md:w-[400px] mx-auto rounded-2xl shadow-2xl sh" src={foodDetails?.FoodPhotoUrl} alt="" />
                </div>
                <div className="w-1/2  border mr-3 rounded-xl p-4 shadow-2xl">
                    <div className=" border mr-3 rounded-xl p-4 shadow-2xl">
                        <h1 className="text-2xl font-medium ">FoodName:{foodDetails?.FoodName}</h1>
                        <p className="font-medium mt-3">FoodQuantity:  {foodDetails?.FoodQuantity}</p>
                        <p className="font-medium mt-3">Expired Date:{foodDetails?.date}</p>
                        <a href="#my_modal_8"><button to={'/CookingRequest'} className="btn mt-3 bg-[#00ffa6]">Request food</button></a>
                    </div>
                    <div className=" mt-10  border mr-3 rounded-xl p-4 shadow-2xl">
                        <h3 className="text-2xl font-medium mb-4">Donner Information</h3>
                        <div className="max-w-[500px]   sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">

                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                <img src={foodDetails?.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{foodDetails?.userName}</h2>
                                    <span className="text-sm font-medium dark:text-gray-600">PickUp Location : {foodDetails?.PickupLocation}</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="flex items-center space-x-2">
                                        <HiOutlineMailOpen />
                                        <span className="dark:text-gray-600">{foodDetails?.email}</span>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal h-[700px]" role="dialog" id="my_modal_8">
                <div className="modal-box">
                    <div>
                    <label className="label">
                        <span className="font-bold">FoodQuantity</span>
                    </label>
                    <input
                        className="input input-bordered join-item w-full mb-4"
                        name="FoodQuantity"
                        placeholder="FoodQuantity"
                        type="number"
                    />
                    </div>
                    <div>
                    <label className="label">
                        <span className="font-bold">FoodImage URL</span>
                    </label>
                    <input
                        className="input input-bordered join-item w-full mb-4"
                        name="FoodImageURL"
                        placeholder="FoodImage URL"
                        type="text"
                    />
                    </div>
                    <div>
                    <label className="label">
                        <span className="font-bold"> FoodId</span>
                    </label>
                    <input
                        className="input input-bordered join-item w-full mb-4"
                        name=" FoodId"
                        placeholder=" Food Id "
                        type="number"
                    />
                    </div>
                    <div>
                    <label className="label">
                        <span className="font-bold">FoodDonator email</span>
                    </label>
                    <input
                        className="input input-bordered join-item w-full mb-4"
                        name="email"
                        placeholder="FoodDonator email"
                        type="text"
                    />
                    </div>
                    <div>
                    <label className="label">
                        <span className="font-bold"> FoodDonator Name</span>
                    </label>
                    <input
                        className="input input-bordered join-item w-full mb-4"
                        name="Name"
                        placeholder=" FoodDonator Name"
                        type="text"
                    />
                    </div>
                    <div>
                    <label className="label">
                        <span className="font-bold"> User Email </span>
                    </label>
                    <input
                        className="input input-bordered join-item w-full mb-4"
                        name=" Useremail "
                        placeholder=" User Email "
                        type="text"
                    />
                    </div>
                    <div>
                    <label className="label">
                        <span className="font-bold"> Request Date</span>
                    </label>
                    <input
                        className="input input-bordered join-item w-full mb-4"
                        name=" RequestDate"
                        placeholder=" Request Date"
                        required
                        type="date"
                    />
                    </div>
                    <div>
                    <label className="label">
                        <span className="font-bold"> Pickup Location</span>
                    </label>
                    <input
                        className="input input-bordered join-item w-full mb-4"
                        name=" PickupLocation"
                        placeholder=" Pickup Location"
                        type="text"
                    />
                    <label className="label">
                        <span className="font-bold"> Expire Date</span>
                    </label>
                    <input
                        className="input input-bordered join-item w-full mb-4"
                        name="  ExpireDate"
                        placeholder="  Expire Date"
                        type="date"
                    />
                    <label className="label">
                        <span className="font-bold"> Additional Notes </span>
                    </label>
                    <input
                        className="input input-bordered join-item w-full mb-4"
                        name=" AdditionalNotes "
                        placeholder=" Additional Notes "
                        type="text"
                        readOnly
                        
                    />
                    </div>
                    <Link className="btn mt-3 w-full bg-[#00ffa6]">REquesting Food</Link>
                </div>
            </div>

        </div>
    );
};

export default FoodDetails;