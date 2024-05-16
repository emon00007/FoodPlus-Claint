import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";

const ManageMyFoods = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([])
    const [control, setcontrol] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/ManageMyFoods/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user, control])
    const handelDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) { setcontrol(!control) }
                if(data.insertedId)
                toast.success("Delete successful!");
                swal({
                    title: "Are You Sure Delete This Food",
                    text: "Do you want to continue",
                    icon: "warning",
                    confirmButtonText: "Confirm",
                });
            })
    }
    return (
        <div >
            <Helmet><title>ManageMyFoodList</title></Helmet>
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
                                
                                <th className="p-3">Food Name</th>
                                <th className="p-3">Donner Name</th>
                                <th className="p-3">Food Quantity</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        {
                            item?.map(p => (


                                <tbody key={p._id} className="border-b dark:bg-gray-50 dark:border-gray-300">
                                    <tr>
                                        
                                        <td className="px-3 py-2">
                                            <p>{p?.FoodName}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            
                                            <p className="dark:text-gray-600">{p?.userName}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{p?.FoodQuantity} P</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>{p?.email}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            
                                            <p className="dark:text-gray-600">{p?.FoodStatus}</p>
                                        </td>
                                        <td className="px-3 py-2">
                                        
                                        <Link to={`/updatePostManage/${p._id}`}><button className="btn bg-[#00ffa6]">Update Spot</button></Link>
                                        <Link ><button onClick ={()=>handelDelete(p._id)}className="btn bg-[#00ffa6]">Delete Spot</button></Link>
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

export default ManageMyFoods;