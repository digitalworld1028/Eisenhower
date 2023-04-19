
const Brings = () => {
    return (
        <div className="container mx-auto text-3 mt-[20px] bg-[url('../public/assets/images/yellow.svg')] bg-no-repeat bg-center">
            <p className="hidden lg:block lg:mt-[100px]">Eisenhower.ai brings the famous <b>Eisenhower productivity framework</b> into Gmail</p>
            <div className=" hidden lg:block lg:grid lg:grid-cols-3 lg:mt-[40px]">
                <div></div>
                <div></div>
                <div><img src={'./assets/images/arrow.png'} /></div>
            </div>
            <p className="hidden lg:block lg:mt-[60px]">Transform your email experience <b>with one click</b></p>

            <div className="lg:px-[100px]">
                <img src="./assets/images/Eisenhower.gif" className="w-[100%]"/>
            </div>

            <p className="hidden lg:block">No steep learning curve. Just more clarity and focus</p>

            <p className="text-[22px] sm:text-[26px] lg:hidden lg:mt-[100px]"><b>Eisenhower.ai brings the famous Eisenhower productivity framework into Gmail</b></p>

            <div className="hidden lg:grid lg:grid-cols-3 lg:mt-[150px]">
                <div></div>
                <div><img src={'./assets/images/arrow.png'} /></div>
                <div></div>
            </div>
            <div className="grid grid-cols-6 lg:hidden">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div><img src={'./assets/images/arrow.png'} /></div>
                
            </div>

            

        </div>
    )
}

export default Brings