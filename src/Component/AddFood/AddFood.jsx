import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Authprovider/Authprovider";

const AddFood = () => {
    const { user } = useContext(AuthContext)
    const handelAddFood = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user ? user.email : "Unknown";
        const userName = user ? user.displayName : "Unknown";
        const photoURL = user ? user?.photoURL : "Unknown";
        const FoodName = form.FoodName.value;
        const FoodQuality = form.FoodQuality.value;
        const PickupLocation = form.PickupLocation.value;
        const FoodStatus = form.FoodStatus.value;
        const AdditionalNotes = form.AdditionalNotes.value;
        const FoodQuantity = form.FoodQuantity.value;
        const FoodPhotoUrl = form.FoodPhotoUrl.value;
        const date = form.date .value;
        const time = form.time.value;
        const addFoodData = {
            email,
            userName,
            photoURL,
            FoodName,
            FoodQuality,
            PickupLocation,
            FoodStatus,
            AdditionalNotes,
            FoodQuantity,
            FoodPhotoUrl,
            time,
            date
        };
        fetch('http://localhost:5000/foodSharePlusSarver', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addFoodData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId)
                    Swal.fire({
                        title: "success",
                        text: "Do you want to continue",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });

            })
        e.target.reset()
        console.log(addFoodData);
    }

    return (

        <div>
            <Helmet>AddFood</Helmet>
            <div className=" p-10">
                <form onSubmit={handelAddFood} className="bg-[#FFFF] shadow-lg rounded-lg mt-8 p-4">
                    <h1 className="font-bold text-4xl text-center ">
                        Add Food
                    </h1>

                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Food Name</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="FoodName"
                                    placeholder="Food Name"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Food Quality</span>

                            </label>
                            <div className="join w-full">
                                <select
                                    className="input input-bordered join-item w-full"

                                    name="FoodQuality"

                                    required
                                >
                                    <option >Select One</option>
                                    <option value="sweet">sweet</option>
                                    <option value="spicy">spicy</option>
                                    <option value="Rice & carry">Rice & carry</option>
                                    <option value="Biryani">Biryani</option>
                                    <option value="Juicy">Juicy</option>
                                    <option value="Fruit">Fruit</option>
                                    <option value="Buttery">Buttery</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Pickup Location</span>
                            </label>
                            <div className="join w-full">
                                <select
                                    className="input input-bordered join-item w-full"

                                    name="PickupLocation"

                                    required
                                >
                                    <option >Select One</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Barisal">Barisal</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                    <option value="rajshahi">rajshahi</option>
                                    <option value="Sylhet">Sylhet</option>
                                    <option value="Rangpur">Rangpur</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Additional Notes</span>
                            </label>
                            <div className="join w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    name="AdditionalNotes"
                                    placeholder="Additional Notes"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:flex gap-6 ">
                        <div className=" md:w-1/2 p-4 ">
                            <label className="label">
                                <span className="font-bold">FoodStatus</span>
                            </label>
                            <div className="join w-full">
                                <select
                                    className="input input-bordered join-item w-full"

                                    name="FoodStatus"

                                    required
                                >
                                    <option value="">Select One</option>
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>

                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:p-4">
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


                    </div>
                    <div className="md:flex gap-6 ">
                    <div className="md:w-1/2 md:p-4">
                        <label className="label">
                            <span className="font-bold">Expired Date</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="date"
                            placeholder="Expired Date/Time"
                            type="date"
                        />
                    </div>
                    <div className="md:w-1/2 md:p-4">
                        <label className="label">
                            <span className="font-bold">Expired Time</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="time"
                            placeholder=""
                            type="time"
                        />
                    </div>


                    </div>
                    <div className="md:flex gap-6 ">


                        <div className="md:w-1/2 md:p-4">
                            <label className="label">
                                <span className="font-bold">PhotoUrl</span>
                            </label>
                            <input
                                className="input input-bordered join-item w-full mb-4"
                                name="FoodPhotoUrl"
                                placeholder="Photo Url"
                                type="text"
                            />
                        </div>
                        <div className="md:w-1/2 md:p-4">
                            <span className="font-bold">User Information</span>

                            <div className="md:flex items-center gap-5 ">
                                <img className="w-20  rounded-full" src={user?.photoURL} alt="" />
                                <div >
                                    <p className="text-xl font-medium">{user?.email}</p>
                                    <p className="text-xl font-medium">{user?.displayName}</p>
                                </div>
                            </div>
                        </div>



                    </div>


                    <input
                        type="submit"
                        value="Add Food"
                        className="btn text-black hover:text-white bg-[#00ffa6] w-full"
                    />



                </form>
            </div >
        </div >
    );
};

export default AddFood;