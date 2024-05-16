
// import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <div className="text-white">
        
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                <p className="font-normal text-base leading-6 text-gray-600 ">Our Food Sharing site is a vibrant online community dedicated to fostering connections through the joy of food. Founded with a passion for reducing food waste and promoting sustainable practices, we strive to create a platform where individuals can share surplus food with those in need or simply connect over a shared love of cooking and sharing meals. Our team is committed to building a welcoming and inclusive environment where everyone feels empowered to participate and contribute. Join us on our mission to make a positive impact on communities and the planet, one meal at a time.</p>
            </div>
            <div className="w-full lg:w-8/12 ">
                <img className="w-full h-full" src="https://i.ibb.co/2j5kP45/volunteer-feeding-poor-homeless-people-outdoors-vector-44469239.jpg" alt="A group of People" />
            </div>
        </div>

        
        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Donner</h1>
                <p className="font-normal text-base leading-6 text-gray-600 ">As a Food Donor on our Food Sharing site, you play a vital role in reducing food waste and supporting those in need. By generously contributing surplus food items, you're helping to ensure that perfectly good food doesn't go to waste and instead reaches individuals and families who can benefit from it. Whether you're a restaurant, grocery store, or individual with extra food to spare, your donations make a meaningful difference in the lives of others. Join our community of Food Donors today and be a part of the solution to food insecurity while also promoting sustainability and compassion. Together, we can make a positive impact through the simple act of sharing.</p>
            </div>
            <div data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000" className="w-full lg:w-8/12 lg:pt-8">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="" src="https://i.ibb.co/L07DB53/5e520a5f2e6e956a5e5e42d80d813f01w-c1558471212rd-w832-h468-r4-q80.jpg" alt="Alexa featured Img" />
                        
                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alex</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="" src="https://i.ibb.co/PWM9fKd/Room-to-IMprove-1.jpg" alt="Olivia featured Img" />
                       
                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="" src="https://i.ibb.co/fxcBGpm/385-1.webp" alt="Claint James Guiral featued Img" />
                        
                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">James Guirale</p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <img className="" src="https://i.ibb.co/xghDKmn/82847b28-c433-11ed-9c16-0210609a3fe2.jpg" alt="Elijah featured img" />
                        
                        <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah mj</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </div>
    );
};

export default AboutUs;