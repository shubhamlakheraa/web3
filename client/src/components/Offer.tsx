const Offer = () => {
    return (
        <>
        <div className="my-[10rem]  ">
            <p className="text-center font-semibold font-outfit text-[55px] mb-[3rem]">What we offer ?</p>

            <div className="flex items-center justify-center">

                {/* <div className="border-2 relative after:absolute bg-[#1D1F20] after:bg-gradient-10 after:content-[''] after:z-[-1] 
                after:animate-[bordergradient_ease_alternate_infinite_3s] after:bg-3">
                    <p className="text-[1.5rem]">
                    Auto-Verification Quests
                    </p>

                    <p className="text-[1rem]">
                        On-chain, Socials, Content creation, Trading contests, Quizzes, Product onboarding, Custom integrations, and more.
                    </p>
                </div> */}

                    <div className="gradient-border m-5" id="box">
                    
                    <div className="h-[100%] w-[100%] rounded-[36px] border-0 bg-[#121519] z-10 px-[2.375rem] py-[2.375rem]">
                    <p className="text-[1.5rem] font-outfit mb-[1rem]">
                    Auto-Verification Quests
                    </p>

                    <p className="text-[1rem] font-outfit opacity-60">
                        On-chain, Socials, Content creation, Trading contests, Quizzes, Product onboarding, Custom integrations, and more.
                    </p>

                    </div>
                </div>

                <div className="gradient-border m-5" id="box">
                    
                    <div className="h-[100%] w-[100%] rounded-[36px] border-0 bg-[#121519] z-10 px-[2.375rem] py-[2.375rem]">
                    <p className="text-[1.5rem] font-outfit mb-[1rem]">
                    Multiple Gasless Rewards
                    </p>

                    <p className="text-[1rem] font-outfit opacity-60 ">
                    XPs, Tokens, NFTs, SBTs, Airdrop leaderboards, Discord roles, Allowlists, Customized in-app rewards, and more.
                    </p>

                    </div>
                </div>

                <div className="gradient-border" id="box">
                    
                    <div className="h-[100%] w-[100%] rounded-[36px] border-0 bg-[#121519] z-10 px-[2.375rem] py-[2.375rem] ">
                    <p className="text-[1.5rem] font-outfit mb-[1rem]">
                    Intract Community Support
                    </p>

                    <p className="text-[1rem] font-outfit opacity-60">
                    Promotion via 600+ KOLs, 100K+ community, 200+ partner giveaways, Ad networks, and 17M wallet-to-Twitter mappings.
                    </p>

                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default Offer