import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
import { RiVisaLine } from "react-icons/ri";

export default function CardFront({nome,numero}){
    return (
        <div className="w-[450px] h-[300px] bg-[#4F4F4F] rounded-xl">
            <div className="w-full h-[30%] flex"> 
                <div className="w-[50%] h-full flex items-center pl-6 mt-4 gap-2">
                    <div className="w-[80px] h-[80px] rounded-full bg-white"></div>
                    <div className="w-[50px] h-[50px] rounded-full bg-white"></div>
                </div>
                <div className="w-[50%] h=full flex p-4 justify-end">
                    <p className="text-[20px] text-white font-bold">Nome do Banco</p>
                </div>
            </div>
            <div className="w-full h-[40%] flex flex-col">
                <div className="w-full h-[60%] flex items-center mt-6 pl-4">
                <FcSimCardChip size={60}/>
                <LuNfc size={28} color='white' />
                </div>
                <div className="w-ful h-[40%] pl-4">
                    <p className="text-[#C0C0C0] font-bold text-[20px]">{numero || "0000 0000 0000 0000"}</p>
                </div>
            </div>
            <div className="w-full h-[30%] pl-4 mt-4 flex justify-between pr-4">
                <p className="text-white text-[20px] font-bold">{nome || "Nome do Cartão"}</p>
                <RiVisaLine size={30} color="white"/>
            </div>
        </div>
    )
}
