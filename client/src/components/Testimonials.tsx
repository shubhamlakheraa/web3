import axie from '../assets/axie.png'
import moonpay from "../assets/moonpay.png"
import inch from "../assets/inch.png"
import polygon from "../assets/polygon.png"
import unstoppable from "../assets/unstoppable-2.png"
import rarible from "../assets/rarible-2.png"
import lido from "../assets/lido.png"
import sushi from "../assets/sushi-2.png"
import bankless from "../assets/bankless.png"
import discord from "../assets/discord.png"
import AOS from "aos";
import { useEffect } from 'react'
import 'aos/dist/aos.css';

const Testimonials = () => {


    useEffect(() => {
        AOS.init();
    }, [])

    

    const l =[
        {
            name: axie,
            time: "100",
        },

        {
            name: moonpay,
            time: "400",
        },

        {
            name: inch,
            time: "600",
        },

        {
            name: polygon,
            time: "300",
        },

        {
            name: unstoppable,
            time: "200",
        },

        {
            name: rarible,
            time: "800",
        },

        {
            name: lido,
            time: "500",
        },

        {
            name: sushi,
            time: "700",
        },

        {
            name: bankless,
            time: "100",
        },
    ]

    const grid = l.map((logo, index) => (

                <div
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-back"
                    data-aos-delay={logo.time}
                  key={index}
                  className="bg-black rounded-2xl px-[1.5rem] flex items-center justify-center  h-[114px] "
                >
                  <img src={logo.name} width={logo.name === inch ? 52 : logo.name === bankless ? 62 : "" } alt="logo" />
                </div>

    ))


    return (
      <>
        <div className="bg-[#3d88da] rounded-[2rem] mt-[3rem] mb-[3rem]  mx-[3rem]">

          <div className="flex items-center justify-center ">
            <div className="grid grid-cols-3 gap-4 max-w-[558px] w-100 m-5">
              {grid}
            </div>

            <div className="ml-[2rem]">
              <h2 className="font-semibold font-outfit text-[2rem] mb-[2rem]">
                Join other top projects
                <br />
                pushing boundaries 🙌
              </h2>

              <p className="font-outfit font-normal text-base mb-[1.5rem] pb-[1rem]">
                We are live across 150+ global projects helping them acquire &<br />
                engage quality users for their platform.
              </p>

              <button className="text-[#434a57]  font-outfit bg-white px-[2rem]  py-[1rem]  text-base font-semibold rounded-[50rem] ">

                <span>Discord</span>
                <img src={discord} width={25} height={25} className='ml-3 inline-block'  />
                
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Testimonials;