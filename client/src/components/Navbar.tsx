import discord from "../assets/discord.png"
import twitter from "../assets/twitter.png"
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <>
        <div className="flex mt-[20px] ml-[46px] items-center justify-between ">

            <div className="flex items-center ">
            <img src={logo} width={40} height={40} />
            <p className="text-[1.375rem] font-semibold pl-2 font-outfit opacity-95 ">Intract</p>
            </div>

            <div className="flex items-center mr-[46px]">
                <button className="border-2 border-[#3d88da] rounded-full p-[11px] "><img src={discord} width={20} height={20} /></button>
                <button className="border-2 border-[#3d88da] rounded-full ml-[8px] p-[11px] "><img src={twitter} width={20} height={20} /></button>
                
                <button className="ml-[8px] font-outfit bg-[#3d88da] px-[1.25rem] py-[0.575rem] text-base font-semibold rounded-[50rem]">Create a Quest</button>
            </div>
           
        </div>
        </>
    );
}

export default Navbar;