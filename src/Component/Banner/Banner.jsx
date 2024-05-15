import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Autoplay,Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <Swiper
            modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            className='sm:h-[400px] md:h-[400px] lg:h-[600px] z-10'>
            <SwiperSlide >
                <img className='relative object-cover w-screen h-full' src="https://i.ibb.co/3zTgWtW/i-Stock-1055191292-1620x1080.jpg" alt="" />
                <div className='absolute hidden lg:block bg-transparent border border-white text-white p-8 rounded-2xl left-[40%] top-[40%]'>
                    <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Support them They are <br /> waiting for food. <span className='  text-yellow-500'>Donate Now</span></h1>
                    <p className='mt-4'> We want to help Planstaine people. They are <br /> suffering from hunger pangs people for people</p>
                </div>
            </SwiperSlide>

            

            <SwiperSlide  >
                <img className='relative object-cover w-screen h-full' src="https://i.ibb.co/qFPC46G/young-woman-giving-money-to-homeless-beggar-man-sitting-in-city.jpg" alt="" />
                <div className='absolute hidden lg:block bg-transparent border border-white text-white p-8 rounded-2xl left-[40%] top-[40%]'>
                <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Support them They are <br /> waiting for food. <span className='  text-yellow-500'>Donate Now</span></h1>
                    <p className='mt-4'> We want to help Planstaine people. They are<br />  suffering from hunger pangs people for people</p>
                </div>
            </SwiperSlide>

            <SwiperSlide >
                <img className='relative object-cover w-screen h-full' src="https://i.ibb.co/4FWVQp9/images-2.jpg" alt="" />
                <div className='absolute hidden lg:block bg-transparent border border-white text-white p-8 rounded-2xl left-[40%] top-[40%]'>
                <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Support them They are <br /> waiting for food. <span className='  text-yellow-500'>Donate Now</span></h1>
                    <p className='mt-4'> We want to help Planstaine people. They are<br />  suffering from hunger pangs. people for people</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <img className='relative object-cover w-screen h-full' src="https://i.ibb.co/C7pJ0W1/download.jpg" alt="" />
                <div className='absolute hidden lg:block bg-transparent border border-white text-white p-8 rounded-2xl left-[40%] top-[40%]'>
                <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Support them They are <br /> waiting for food. <span className='  text-yellow-500'>Donate Now</span></h1>
                    <p className='mt-4'> We want to help Planstaine people.They are <br />  suffering from hunger pangs .people for people</p>
                </div>
            </SwiperSlide>



        </Swiper>
    );
};

export default Banner;