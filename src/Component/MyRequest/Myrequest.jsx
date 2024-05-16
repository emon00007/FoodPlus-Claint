import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";


const Myrequest = () => {
    const { user } = useContext(AuthContext)
    const [foodrequest, setFoodrequest] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myFoodRequest/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFoodrequest(data);
                console.log(data);
            });
    }, [user]);
    return (

        <div>
            
            <div className=" p-2 lg:mx-auto lg:container md:container sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="dark:bg-gray-300">

                                <th className="p-3">Donner Name</th>
                                <th className="p-3">Pick up Location</th>
                                <th className="p-3">Expire Date</th>
                                <th className="p-3">Request Date</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        {
                            foodrequest?.map(Request => (


                                <tbody key={Request._id} className="border-b dark:bg-gray-50 dark:border-gray-300">
                                    <tr>

                                        <td className="px-3 py-2">
                                            <p>{Request?.userName}</p>
                                        </td>
                                        <td className="px-3 py-2">

                                            <p className="dark:text-gray-600">{Request?.PickupLocation}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{Request?.date} </p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{Request?.RequestDate}</p>
                                        </td>
                                        <td className="px-3 py-2">

                                            <p className="dark:text-gray-600">{Request?.FoodStatus}</p>
                                        </td>
                                        <td className="px-3 py-2">


                                        </td>
                                    </tr>

                                </tbody>


                            )
                            )
                        }


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myrequest;