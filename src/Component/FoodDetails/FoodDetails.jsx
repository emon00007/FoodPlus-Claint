import { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AuthContext } from "../../Authprovider/Authprovider";
import moment from 'moment';
import { toast } from "react-toastify";
import swal from "sweetalert";
import { Helmet } from "react-helmet";


const FoodDetails = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const currentTime = moment().format("MMM Do YY");
    const [foodDetails, setFoodDetails] = useState({});

    // const HandelAddfood2 =e=>{
    //     e.preventDefault
    // }
    const handelUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const AdditionalNotes = form.AdditionalNotes.value;
        const RequestDate = form.RequestDate.value;
        const FoodStatus = form.FoodStatus.value;
        const requesrUseremail = user ? user.email : "Unknown";

        const updatenotes = {
            AdditionalNotes,
            RequestDate,
            requesrUseremail,
            FoodStatus

        }
        console.log(AdditionalNotes,
            RequestDate
        )
        fetch(`https://food-share-plus-server.vercel.app/updatePost/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatenotes)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId)
                    toast.success("Update successful!");
                swal({
                    title: "success",
                    text: "Your request confirmed",
                    icon: "success",
                    confirmButtonText: "Continue",

                })

            })
        navigate('/')
        e.target.reset()
    }


    useEffect(() => {
        fetch(`https://food-share-plus-server.vercel.app/FoodDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setFoodDetails(data);
                console.log(data);
            });
    }, [id]);
    return (

        <div>
            <Helmet><title>FoodDetails</title></Helmet>
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
                <form onSubmit={handelUpdate} className="modal-box">
                    <div>
                        <label className="label">
                            <span className="font-bold">FoodQuantity</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="FoodQuantity"
                            placeholder="FoodQuantity"
                            value={foodDetails?.FoodQuantity}
                            type="number"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">FoodImage URL</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="FoodImageURL"
                            value={foodDetails?.FoodPhotoUrl}
                            type="text"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold"> FoodId</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name=" FoodId"
                            value={foodDetails?._id}
                            type="text"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">FoodDonator email</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="email"
                            value={foodDetails?.email}
                            type="text"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold"> FoodDonator Name</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="Name"
                            value={foodDetails?.userName}
                            type="text"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold"> User Email </span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name=" Useremail "
                            value={user?.email}
                            type="text"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold"> Request Date</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="RequestDate"
                            value={currentTime}
                            required
                        // readOnly


                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold"> Pickup Location</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name=" PickupLocation"
                            value={foodDetails?.PickupLocation}
                            readOnly
                            type="text"
                        />
                        <label className="label">
                            <span className="font-bold"> Expire Date</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="  ExpireDate"
                            value={foodDetails?.date}
                            readOnly
                        />

                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold"> Status </span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="FoodStatus"

                            value={"request"}
                            type="text"

                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold"> Additional Notes </span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="AdditionalNotes"
                            // placeholder="Additional Notes"
                            defaultValue={foodDetails?.AdditionalNotes}
                            // value={foodDetails.AdditionalNotes}
                            type="text"

                        />
                    </div>
                    <input type="submit"
                        className="btn mt-3 w-full bg-[#00ffa6]"
                        value="Requesting Food"
                    />
                    {/* <input ></input> */}
                </form>

            </div>

        </div>
    );
};

export default FoodDetails;