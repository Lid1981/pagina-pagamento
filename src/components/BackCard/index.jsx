export default function BackCard({cvv}){
    return(
        <div className="w-[450px] h-[300px] bg-[#4F4F4F] rounded-xl">
                <div className="w-full h-[40%] flex items-end">
                    <div className="w-full h-[45px] bg-[#808080]"></div>
            </div>
                 <div className="w-full h-[60%] flex justify-center pt-[30px]">
                    <div className="w-[70%] h-[40px] bg-[#D3D3D3] flex items-center justify-end">
                        <p className="text-black font-bold text-[20px] mr-5">{cvv || "000"}</p>
                    </div>
            </div>
        </div>
    )
}