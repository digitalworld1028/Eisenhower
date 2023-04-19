
const Triage = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[140px] pt-[120px] lg:pt-[240px] lg:bg-[url('../public/assets/images/bg-blue.svg'),_url('../public/assets/images/bg-yellow.svg')]">
            <div className="flex justify-center lg:hidden">
                <img src={'./assets/images/man.png'} className="w-[250px]" />
            </div>
            <div className=" font-Work-Sans text-center lg:text-left">
                <div className="">
                    <div className="text-[30px] sm:text-[38px] lg:text-1 "><b>Triage</b> your <b>inbox</b> with <b>military precision</b></div>
                    <div className="text-[20px] sm:text-[24px] pt-[30px]">Try Eisenhower.ai for Gmail for FREE</div>
                </div>
                <div className="mt-[50px] text-2 flex justify-center lg:justify-start">
                    <div className="">
                        <div className="flex items-center justify-start">
                            <div className="w-[26px] flex justify-center">
                                <img src={'./assets/images/lightning.png'} className="w-[13px]" />
                            </div>
                            <p className="ml-5 text-left"><b>Prioritize your emails</b> at 10x speed</p>
                        </div>

                        <div className="flex items-center justify-start mt-[20px]">
                            <div className="w-[26px] flex justify-center">
                                <img src={'./assets/images/brain.png'} className="w-[26px]" />
                            </div>

                            <p className="ml-5 text-left"><b>Never lose track</b> of to-do’s or follow-ups</p>
                        </div>

                        <div className="flex items-center justify-start mt-[20px]">
                            <div className="w-[26px] flex justify-center">
                                <img src={'./assets/images/sun.svg'} className="w-[20px]" />
                            </div>
                            <p className="ml-5 text-left"><b>Seize the day</b> with legendary productivity</p>
                        </div>
                    </div>


                </div>
                <div className="mt-[50px]">
                    <button className="bg-gradient-to-b from-[#F54645] from-0% to-[#A02928] to-100% w-[190px] h-[55px] rounded-[15px] text-[16px] text-white shadow-lg shadow-red-300 hover:shadow-red-500">Add to Chrome</button>
                </div>
            </div>
            <div className="flex justify-center hidden lg:block">
                <img src={'./assets/images/man.png'} />
            </div>
        </div>
    )
}

export default Triage