import { Swiper, SwiperSlide } from 'swiper/react';
import LogoOne from '../Assets/logotest1.png';
import LogoTwo from '../Assets/logotest2.png';
import 'swiper/css';
import 'swiper/css/pagination';
import './Affiliate.css';

import { Pagination } from 'swiper/modules';

const Affiliate = () => {
    return (
        <div className="sliderdiv">
            <div className="affiliatetop"></div>
            <div className='containerslide'>
            <div className='companycontainer'>
                <p>Expos, Affiliations and Sponsors</p>
            </div>
            <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='sliderimg'>
              <img src={LogoOne} alt='logoimages' />
              <img src={LogoTwo} alt='logoimages' />
              <img src={LogoOne} alt='logoimages' />
              <img src={LogoTwo} alt='logoimages' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderimg'>
              <img src={LogoOne} alt='logoimages' />
              <img src={LogoTwo} alt='logoimages' />
              <img src={LogoOne} alt='logoimages' />
              <img src={LogoTwo} alt='logoimages' />
              </div></SwiperSlide>
          </Swiper>
          </div>
        </div>
    )
}

export default Affiliate;