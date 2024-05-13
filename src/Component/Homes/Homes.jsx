import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";


const Homes = () => {
    const foods = useLoaderData().slice(0,6);
    console.log(foods)
    return (
        <div>
            <Banner></Banner>
            <div className=" mt-5 grid lg:grid-cols-3 md:grid-cols-2">
                {foods.map(food=>(
                    <div key={food._id}>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
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