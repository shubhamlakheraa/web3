import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import useResponsive from "../hooks/useResponsive";


const Intro = () => {


  const { isDesktop } = useResponsive()

  return (
    <>
      <div
        className={` bg-[#121519] opacity-100 rounded-[36px]  overflow-hidden px-[3rem] py-[3rem] 
        px-sm-4 px-xl-5 mt-[0.5rem]  mx-lg-auto max-w-[1660px] ${!isDesktop ? "ml-3 mr-3 mt-[4rem]" : "ml-[3rem] mr-[3rem]"}  bg-[url('assets/waves.png')] 
        bg-cover bg-center   animate-[moveImage_linear_infinite_10s] text-center `}
      >
        

        <div className="">

        <span
          className={` ${!isDesktop ? "text-[2.7rem]": "text-[5rem]"} font-semibold  font-outfit bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPan_linear_infinite_3s] 
                bg-repeat-x `}
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
                className={`${!isDesktop ? "text-[2.7rem]": "text-[5rem]"} font-outfit bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPanInverse_linear_infinite_3s] 
                bg-repeat-x`}
              >
                DApp Community
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span
                className={`${!isDesktop ? "text-[2.7rem]": "text-[5rem]"} font-outfit bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPanInverse_linear_infinite_3s]`}
              >
                DeFi Community
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span
                className={`${!isDesktop ? "text-[2.7rem]": "text-[5rem]"} font-outfit bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPanInverse_linear_infinite_3s]`}
              >
                NFT Community
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span
                className={` ${!isDesktop ? "text-[2.7rem]": "text-[5rem]"} font-outfit bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPanInverse_linear_infinite_3s]`}
              >
                GameFi Community
              </span>
            </SwiperSlide>
          </Swiper>
        </span>

        <p className={` ${!isDesktop ? "text-[1.25rem]" : "text-2xl"}   font-outfit text-gray-300`}>
          Engage your power users & product evangelists, with personalized
          {!isDesktop ? " "   : <br />}
          quests & rewards, boosted by Intract’s community network
        </p>

        <div className="mt-[3rem]">
          <button className={`text-[#434a57] font-outfit bg-white px-[2rem]  py-[1rem]  text-base font-semibold rounded-[50rem] ${!isDesktop ? "w-[100%]" : ""} `}>Explore Quests</button>
          <button className={` font-outfit bg-[#3d88da] px-[2rem] py-[1rem] text-base font-semibold rounded-[50rem] ${!isDesktop ? "mt-5 w-[100%]" : "ml-[8px]"} `}>Create Quests</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
