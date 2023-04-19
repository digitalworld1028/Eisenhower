const How = () => {
    return (
        <div className="container mx-auto mt-[50px] lg:mt-[160px]">
            <div className="bg-blue-100 py-[40px] md:py-[100px] bg-[url('../public/assets/images/inbox.svg')] bg-cover rounded-[15px]">
                <div className="lg:w-[50%] text-left pl-[20px] md:pl-[100px]">
                    <p className="text-[30px] md:text-[48px]">Battle your inbox with Eisenhower.ai</p>
                    <button className="mt-[20px] md:mt-[40px] bg-gradient-to-b from-[#F54645] from-0% to-[#A02928] to-100% w-[220px] h-[55px] rounded-[15px] text-[16px] text-white shadow-lg shadow-red-300 hover:shadow-red-500">Add to Chrome</button>
                </div>
            </div>

            <div className="mt-[60px] lg:mt-[120px] lg:px-[100px]">
                <p className="text-[22px] px-[20px] font-bold md:text-3 md:hidden">Eisenhower.ai brings the famous Eisenhower productivity framework into Gmail</p>
                <p className="text-3 hidden md:block">How Eisenhower.ai Works</p>
                <div className="flex justify-between mt-[40px] lg:mt-[80px]">
                    <img src="./assets/images/left-arrow.svg" className="hidden md:block" />
                    <p className="text-6">Click Eisenhower View to transform Gmail into an action-oriented dashboard.</p>
                    <img src="./assets/images/right-arrow.svg" className="hidden md:block" />
                </div>
                <img src="./assets/images/how.gif" className="w-[100%] mt-[30px]" />
            </div>

            <div className="flex justify-center mt-[30px] gap-[30px] md:hidden">
                <img src="./assets/images/left-arrow.svg" className="w-[30px]"/>
                <img src="./assets/images/right-arrow.svg" className="w-[30px]" />
            </div>

            <div className="bg-blue-100 py-[40px] md:py-[100px] mt-[20px] lg:mt-[120px] bg-[url('../public/assets/images/gmail.svg')] bg-cover rounded-[15px]">
                <div className="md:w-[40%] text-left pl-[20px] md:pl-[100px]">
                    <p className="text-[30px] md:text-[48px]">Eisenhower.ai</p>
                    <p className="text-[16px] mt-[10px] md:mt-[30px] sm:text-[24px]">Try for for FREE</p>
                    <button className="mt-[10px] md:mt-[40px] bg-gradient-to-b from-[#F54645] from-0% to-[#A02928] to-100% w-[220px] h-[55px] rounded-[15px] text-[16px] text-white shadow-lg shadow-red-300 hover:shadow-red-500">Add to Chrome</button>
                </div>
            </div>

            

        </div>
    )
}

export default How