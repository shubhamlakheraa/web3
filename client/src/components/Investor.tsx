import alphawave from "../assets/alphawave.png" 
import bitkraft  from "../assets/bitkraft.png"
import gumi  from "../assets/gumi.png"
import polygon  from "../assets/polygon.png"
import moonpay from "../assets/moonpay.png"
import web3studios from "../assets/web3-studios.png"
import tokentus  from "../assets/tokentus.png"
import Devcon  from "../assets/Devcon.png"
import useResponsive from "../hooks/useResponsive"

const Investor = () => {

  const { isDesktop } = useResponsive()
    return (
      <>
        <div className={`mt-[8rem] text-center  ${!isDesktop ? "text-[35px]" : "text-[55px]" }   font-semibold font-outfit`}>
          <p>Backed by the best!</p>
          <div className="flex overflow-x-hidden relative flex-row w-[100%] gap-6">
            <div className={`flex items-center flex-row animate-[scroll_linear_infinite_16s_1s] z-1 ${!isDesktop ? "" : "min-w-[100%]"}  `}>

              <div className="w-[250px] px-[2rem]"><img className=" " width={150} src={alphawave}   alt="logo" /></div>
              <div className="w-[250px] px-[2rem]"><img className=" " width={150} src={bitkraft}    alt="logo" /></div>
              <div className="w-[250px] px-[2rem]"><img className=" " width={150} src={gumi}        alt="logo" /></div>
              <div className="w-[250px] px-[2rem]"><img className=" " width={150} src={polygon}     alt="logo" /></div>
              <div className="w-[250px] px-[2rem]"><img className=" " width={150} src={moonpay}     alt="logo" /></div>
              <div className="w-[250px] px-[2rem]"><img className=" " width={150} src={web3studios} alt="logo"/></div>
              <div className="w-[250px] px-[2rem]"><img className=" " width={150} src={tokentus}    alt="logo" /></div>
              <div className="w-[250px] px-[2rem]"><img className=" " width={150} src={Devcon}      alt="logo" /></div>

            </div>
            <div className={`flex items-center  flex-row animate-[scroll_linear_infinite_16s_1s] z-1 ${!isDesktop ? "" : "min-w-[100%]"}  `}>

        <div className="w-[250px] px-[2rem]"><img className="" width={150} src={alphawave}    alt="logo" /></div>
        <div className="w-[250px] px-[2rem]"><img className="" width={150} src={bitkraft}     alt="logo"/></div>
        <div className="w-[250px] px-[2rem]"><img className="" width={150} src={gumi}         alt="logo" /></div>
        <div className="w-[250px] px-[2rem]"><img className="" width={150} src={polygon}      alt="logo" /></div>
        <div className="w-[250px] px-[2rem]"><img className="" width={150} src={moonpay}      alt="logo" /></div>
        <div className="w-[250px] px-[2rem]"><img className="" width={150} src={web3studios}  alt="logo" /></div>
        <div className="w-[250px] px-[2rem]"><img className="" width={150} src={tokentus}     alt="logo" /></div>
        <div className="w-[250px] px-[2rem]"><img className="" width={150} src={Devcon}       alt="logo" /></div>

        </div>
          </div>
        </div>
      </>
    );
}

export default Investor;