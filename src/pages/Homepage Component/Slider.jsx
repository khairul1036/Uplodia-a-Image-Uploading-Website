
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper -z-50 "
            >
                <SwiperSlide>
                    <img className='w-[500px] h-[400px]' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-[500px] h-[400px]' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[500px] h-[400px]' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-[500px] h-[400px]' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
              
            </Swiper>
        </div>
    );
};

export default Slider;