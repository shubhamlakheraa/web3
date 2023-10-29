import useResponsive from "../hooks/useResponsive";




const Offer = () => {

    const { isDesktop } = useResponsive()



    return (
        <>
        <div className={` ${!isDesktop ? "flex justify-center items-center" : ""}  my-[10rem]   `}>

            <div>
            <p className={`text-center font-semibold font-outfit ${ !isDesktop ? "text-[35px]" : "text-[55px] "} mb-[3rem]`}>What we offer ?</p>

            <div className={`${!isDesktop ? "" : "flex items-center justify-center "}  `}>

             

                    <div className={`gradient-border my-5 ${!isDesktop ? "max-w-[340px] " : ""} `} id="box">
                    
                    <div className={`h-[100%] w-[100%] rounded-[36px] border-0 bg-[#121519] z-10 ${!isDesktop ? "px-[28.5px] py-[28.5px] text-center" : "px-[2.375rem] py-[2.375rem] "}  `}>
                    <p className={` ${!isDesktop ? "text-[1.25rem]" : "text-[1.5rem]"}  text-[1.5rem] font-outfit mb-[1rem]`}>
                    Auto-Verification Quests
                    </p>

                    <p className="text-[1rem] font-outfit opacity-60">
                        On-chain, Socials, Content creation, Trading contests, Quizzes, Product onboarding, Custom integrations, and more.
                    </p>

                    </div>
                </div>

                <div className={`gradient-border my-5 ${!isDesktop ? "max-w-[340px] " : "mx-5"}`} id="box">
                    
                    <div className={`h-[100%] w-[100%] rounded-[36px] border-0 bg-[#121519] z-10 ${!isDesktop ? "px-[28.5px] py-[28.5px] text-center" : "px-[2.375rem] py-[2.375rem]"}`}>
                    <p className={` ${!isDesktop ? "text-[1.25rem]" : "text-[1.5rem]"} font-outfit mb-[1rem]`}>
                    Multiple Gasless Rewards
                    </p>

                    <p className="text-[1rem] font-outfit opacity-60 ">
                    XPs, Tokens, NFTs, SBTs, Airdrop leaderboards, Discord roles, Allowlists, Customized in-app rewards, and more.
                    </p>

                    </div>
                </div>

                <div className={`gradient-border ${!isDesktop ? "max-w-[340px] " : ""}`} id="box">
                    
                    <div className={`h-[100%] w-[100%] rounded-[36px] border-0 bg-[#121519] z-10 ${!isDesktop ? "px-[28.5px] py-[28.5px] text-center" : "px-[2.375rem] py-[2.375rem]"} `}>
                    <p className={` ${!isDesktop ? "text-[1.25rem]" : "text-[1.5rem]"} font-outfit mb-[1rem]`}>
                    Intract Community Support
                    </p>

                    <p className="text-[1rem] font-outfit opacity-60">
                    Promotion via 600+ KOLs, 100K+ community, 200+ partner giveaways, Ad networks, and 17M wallet-to-Twitter mappings.
                    </p>

                    </div>
                </div>

            </div>
            </div>
        </div>
        </>
    );
}

export default Offer