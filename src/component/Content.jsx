const Content = () => {
    return (
        <div className="container mx-auto mt-[50px] lg:mt-[150px]">
            <div className="lg:flex lg:justify-between lg:gap-[40px]">
                <div className="text-center lg:text-left flex items-center">
                    <div>
                        <p className="text-4 font-bold">Play Offense, Not Defense</p>
                        <p className="text-5 mt-[20px]">Sort through the mountain of unread emails every morning with Eisenhower.ai's Drag-and-Drop Triage</p>
                    </div>
                </div>
                <div>
                    <img src="./assets/images/offense.gif" />
                </div>
            </div>

            <div className="lg:flex lg:justify-between lg:gap-[40px] mt-[80px] lg:mt-[300px]">
                <div className="text-center lg:hidden lg:text-left flex items-center">
                    <div>
                        <p className="text-4 font-bold">Let Your Reliability Shine</p>
                        <p className="text-5 mt-[20px]">Getting back to clients. Pushing the ball forward.
                            If responsiveness is important to your work, Eisenhower.ai can up your game.</p>
                    </div>
                </div>

                <div>
                    <img src="./assets/images/shine.gif" />
                </div>

                <div className="hidden lg:block text-left lg:flex lg:items-center">
                    <div>
                        <p className="text-4 font-bold">Let Your Reliability Shine</p>
                        <p className="text-5 mt-[20px]">Getting back to clients. Pushing the ball forward.
                            If responsiveness is important to your work, Eisenhower.ai can up your game.</p>
                    </div>
                </div>
            </div>

            <div className="lg:flex lg:justify-between gap-[40px] mt-[80px] lg:mt-[300px]">
                <div className="text-center lg:text-left flex items-center">
                    <div>
                        <p className="text-4 font-bold">Bring the Best Tool for the Job</p>
                        <p className="text-5 mt-[20px]">Work has changed a lot since 2007. Your email interface hasn’t.</p>
                        <p className="text-5 mt-[20px]">Eisenhower.ai evolves Gmail into a simple, but effective dashboard, built for modern workflows.</p>
                    </div>
                </div>
                <div>
                    <img src="./assets/images/bring.gif" />
                </div>
            </div>

        </div>

    )
}

export default Content