import { useState } from "react"
import { useScrollPosition } from "../hook/useScrollPosition"

const Header = () => {
    const scrollPosition = useScrollPosition()
    const [click, setClick] = useState(false);
    return (
        <div>
            <div className={`fixed left-0 top-0 w-full ease-in duration-300 bg-none px-[20px] ${scrollPosition && "bg-[#FFF]"}`}>
                <div className="container mx-auto hidden sm:block sm:flex sm:justify-between sm:leading-[31px] my-[18px]">
                    <div className="text-[24px] font-IBM-Plex-Serif"><b>Eisenhower.ai</b></div>
                    <div className="text-[16px] font-Work-Sans">
                        <button className="border-none">How It Works</button>
                        <button className="border-none ps-[30px] pe-[50px]">Pricing</button>
                        <button className="outline rounded-full w-[168px] h-[44px] text-[14px] text-[#F54645]">Add to Chrome</button>
                    </div>
                </div>
                <div className="container mx-auto flex justify-start leading-[31px] my-[18px] mx-[20px] items-center sm:hidden">
                    <img src={'./assets/images/menu.svg'} onClick={() => {setClick(true)}}></img>
                    <div className="text-[24px] font-IBM-Plex-Serif ml-[10px]" onClick={() => {setClick(true)}}><b>Eisenhower.ai</b></div>
                </div>
            </div>

            <div className={`fixed left-0 w-full h-screen bg-white ${click == true ? 'block' : 'hidden'}`}>
                <div className="flex justify-between px-[30px] h-[60px] text-[20px] font-bold items-center border-b-2 border-black">
                    <div>Menu</div>
                    <div onClick={() => {setClick(false)}}>X</div>
                </div>
                <div className="flex flex-col justify-start pl-[30px] items-start text-5">
                    <button className="border-none mt-[30px]">How It Works</button>
                    <button className="border-none mt-[30px]">Pricing</button>
                    <button className="outline rounded-full w-[168px] h-[44px] text-[14px] text-[#F54645] mt-[30px]">Add to Chrome</button>
                </div>
            </div>
        </div>


    )
}

export default Header
