import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";


const Intro = () => {
  return (
    <>
      <div
        className="bg-[#121519] opacity-100 rounded-[36px]  overflow-hidden px-[3rem] py-[3rem] 
        px-sm-4 px-xl-5 mt-[0.5rem] mx-md-n3 mx-lg-auto max-w-[1660px] ml-[3rem] mr-[3rem] bg-[url('assets/waves.png')] 
        bg-cover bg-center   animate-[moveImage_linear_infinite_10s] text-center "
      >
        

        <div className="">

        <span
          className="text-[5rem] font-outfit bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPan_linear_infinite_3s] 
                bg-repeat-x "
        >
          Growth Platform
          <br />
          for your
          <br />
          <Swiper
            direction={"vertical"}
            // spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            //   height={106}
            autoHeight={true}
          >
            <SwiperSlide>
              <span
                className="text-[5rem] font-outfit bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPanInverse_linear_infinite_3s] 
                bg-repeat-x"
              >
                DApp Community
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span
                className="text-[5rem] font-outfit bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPanInverse_linear_infinite_3s]"
              >
                DeFi Community
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span
                className="text-[5rem] font-outfit bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPanInverse_linear_infinite_3s]"
              >
                NFT Community
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span
                className="text-[5rem] font-outfit bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPanInverse_linear_infinite_3s]"
              >
                GameFi Community
              </span>
            </SwiperSlide>
          </Swiper>
        </span>

        <p className="text-2xl font-outfit text-gray-300">
          Engage your power users & product evangelists, with personalized
          <br /> quests & rewards, boosted by Intract’s community network
        </p>

        <div className="mt-[3rem]">
          <button className="text-[#434a57] font-outfit bg-white px-[2rem]  py-[1rem]  text-base font-semibold rounded-[50rem] ">Explore Quests</button>
          <button className="ml-[8px] font-outfit bg-[#3d88da] px-[2rem] py-[1rem] text-base font-semibold rounded-[50rem]">Create Quests</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
