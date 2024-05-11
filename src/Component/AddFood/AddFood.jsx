import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Authprovider/Authprovider";

const AddFood = () => {
    const { user } = useContext(AuthContext)
    return (

        <div>
            <Helmet>AddFood</Helmet>
            <div className=" p-10">
                <form

                    className="bg-[#FFFF] shadow-lg rounded-lg mt-8 p-4"
                >
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
                                    <option value="">sweet</option>
                                    <option value="">spicy</option>
                                    <option value="">Rice & carry</option>
                                    <option value="">Biryani</option>
                                    <option value="">Juicy</option>
                                    <option value="">Fruit</option>
                                    <option value="">Buttery</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="md:flex gap-6 ">
                        <div className="md:w-1/2 p-4">
                            <label className="label">
                                <span className="font-bold">Location</span>
                            </label>
                            <div className="join w-full">
                                <select
                                    className="input input-bordered join-item w-full"

                                    name="Location"

                                    required
                                >
                                    <option value="">Dhaka</option>
                                    <option value="">Khulna</option>
                                    <option value="">Chittagong</option>
                                    <option value="">Barisal</option>
                                    <option value="">Mymensingh</option>
                                    <option value="">rajshahi</option>
                                    <option value="">Sylhet</option>
                                    <option value="">Rangpur</option>
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
                                    name="Additional Notes"
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

                                name="Location"

                                required
                            >
                                <option value="">Available</option>
                                <option value="">Unavailable</option>

                            </select>
                        </div>
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
                    <div className="w-full p-4 ">
                        {/* {" "} */}
                        <label className="label">
                            <span className="font-bold">PhotoUrl</span>
                        </label>
                        <input
                            className="input input-bordered join-item w-full mb-4"
                            name="photoUrl"
                            placeholder="Photo Url"
                            type="text"
                        />


                        <input
                            type="submit"
                            value="Add Food"
                            className="btn text-black hover:text-white bg-[#00ffa6] w-full"
                        />

                    </div>





                </form>
            </div >
        </div >
    );
};

export default AddFood;