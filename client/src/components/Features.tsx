
import { useEffect } from "react";
import feature1 from "../assets/feature-1.png"
import feature2 from "../assets/feature-2.png"
import feature3 from "../assets/feature-3.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import useResponsive from "../hooks/useResponsive";



const Features = () => {


    const { isDesktop } = useResponsive()



 

    useEffect(() => {

        AOS.init({
            disable: 'mobile'
          });

    },[])

    


    
    return (
        <>
        <div>
            <div 
                 className={` ${!isDesktop ? "" : "flex items-center flex-row justify-around "}   mb-[8rem] `}
                 data-aos={`fade-up`}
                 data-aos-duration="600"
                 data-aos-offset="300"
                 data-disable-parallax-down="md"
                 >
                <img className={` ${!isDesktop ? "px-3" : "ml-[2rem]"}  `} src={feature1} width={636} alt="image" />
                <div 
                    className={` ${!isDesktop ? "mt-8 px-5" : "ml-[8rem]"}  `}
                    data-aos="fade-up"
                    data-aos-duration="850"
                    data-aos-offset="200"
                    data-disable-parallax-down="md"

                >
                    <p className={`text-[#3F7FCA] font-semibold font-outfit mb-[1.5rem] `}>User Growth</p>
                    <h1 className={` ${!isDesktop ? "text-[1.62rem]" : "text-[2rem]"}   font-semibold font-outfit mb-[2rem]`}>Unleash Success with Real Users! </h1>
                    <ul className="marker:text-gray-500 list-disc ml-5">
                        <li className={`text-gray-400 font-outfit text-xl   `}>Acquire & retain your power users via quests</li>
                        <li className={`text-gray-400 font-outfit text-xl   `}>Access Intract’s community network for free</li>
                        <li className={`text-gray-400 font-outfit text-xl   `}>Find only real users; no bots or token hunters</li>
                    </ul>
                </div>
            </div>

            <div 
                
                className={`${!isDesktop ? "" : "flex items-center flex-row justify-around "}  mb-[8rem]  `}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-offset="300"
                data-disable-parallax-down="md"

                >
                    {!isDesktop ? <img className={` ${!isDesktop ? "px-3" : " ml-[2rem]"}  `} src={feature2} width={636} alt="image" /> : "" }
                <div 
                    className={`${!isDesktop ? "mt-8 px-3" : "ml-[3rem]"} `}
                    data-aos="fade-up"
                    data-aos-duration="850"
                    data-aos-offset="300"
                    data-disable-parallax-down="md"

                    >
                    <p className="text-[#3F7FCA] font-semibold font-outfit mb-[1.5rem] ">Community Engagement</p>
                    <h1 className={`${!isDesktop ? "text-[1.52rem]" : "text-[2rem]"}   font-semibold font-outfit mb-[2rem]`}>Inspire Loyalty with Engaging <br />Community Experiences! </h1>
                    <ul className="marker:text-gray-500 list-disc ml-5">
                        <li className="text-gray-400 font-outfit text-xl">High loyalty via trading contests & content ambassadors</li>
                        <li className="text-gray-400 font-outfit text-xl">Retain website visitors & whales with personalized ads</li>
                        <li className="text-gray-400 font-outfit text-xl">Unify on-chain, social & email profiles for communication</li>
                    </ul>
                </div>
                {isDesktop ? <img className="ml-[2rem]" src={feature2} width={636} alt="image" /> : "" }
                
                
            </div>

            <div 
                
                className={`${!isDesktop ? "" : "flex items-center flex-row justify-around "}  mb-[8rem]  `}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-offset="300"
                data-disable-parallax-down="md"
                >
                <img className={` ${!isDesktop ? "px-3" : "ml-[2rem]"}  `} src={feature3} width={636} alt="image" />
                <div 
                    className={` ${!isDesktop ? "mt-8 px-5" : "ml-[8rem]"}  `}
                    data-aos="fade-up"
                    data-aos-duration="850"
                    data-aos-offset="200"
                    data-disable-parallax-down="md"

                    >
                    <p className="text-[#3F7FCA] font-semibold font-outfit mb-[1.5rem] ">Endless Possibilities await!</p>
                    <h1 className="text-[2rem] font-semibold font-outfit mb-[2rem]">And Much More... </h1>
                    <ul className="marker:text-gray-500 list-disc ml-5">
                        <li className="text-gray-400 font-outfit text-xl">Web3 CRM for your customer success & feedback</li>
                        <li className="text-gray-400 font-outfit text-xl">Embed quest campaigns on your own website</li>
                        <li className="text-gray-400 font-outfit text-xl">Enjoy priority access to our 24x7 marketing support</li>
                    </ul>
                </div>
            </div>
            

        </div>
        </>
    );
}

export default Features