

const Footer = () => {
    return (
        <>
        <div className="bg-[#121519] opacity-100 h-[25rem]">
        <div className="pt-[1.5rem] pb-[0.5rem] max-w-[95%] ">

            <div className="flex flex-wrap mx-[12px] pt-[24px]">

                <div className="min-w-[75%] pl-[1.5rem] " >
                    <div className="font-bold font-outfit text-[18px] text-transparent bg-clip-text bg-gradient-18
                    animate-[shine_linear_infinite_3s] mb-[1.5rem]">Get free access</div>
                    <div className="pb-[1rem] font-outfit font-semibold text-[2.5rem]">
                        Book a call and get&nbsp;  
                        <span className="bg-gradient-45 bg-clip-text text-transparent  
                                animate-[gradientPan_linear_infinite_2s]  bg-2">
                            free access&nbsp;  
                        </span>
                        to 
                        &nbsp; <br />Intract
                    </div>

                    <button className="font-outfit rounded-2xl border-2 px-[1.75rem] py-[0.825rem]
                     hover:bg-[#fff] hover:text-[#434a57] ease-in-out duration-[0.2s]">Schedule a call</button>

                </div>

                <div className="">

                    <div className=" ">
                    <p className="mt-[0.25rem] py-1 font-bold cursor-pointer font-outfit text-[#576071] ">Sitemaps</p>
                    <p className="mt-[0.25rem] py-1 ease-in-out duration-[0.2s] font-bold cursor-pointer hover:text-[#3d88da] font-outfit">Community</p>
                    <p className="mt-[0.25rem] py-1 font-bold cursor-pointer hover:text-[#3d88da] font-outfit">Vision</p>
                    <p className="mt-[0.25rem] py-1 ease-in-out duration-[0.2s] font-semibold cursor-pointer hover:text-[#3d88da] hover:no-underline underline font-outfit decoration-[#3d88da]">Blogs</p>
                    </div>
                    


                </div>

            </div>



        </div>


        </div>
        </>
    );
}

export default Footer;