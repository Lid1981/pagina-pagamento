import CardFront from "./components/FrontCard";

export default function App(){
  return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] h-full bg-[#9400D3]">
        <div className="absolute top-10 left-70">
        <CardFront />
        </div>
      </div>
      <div className="w-[60%] relative h-full flex justify-end p-[50px]">
        <h1 className="text-[#9400D3] text-[45px] w-[80%] h-[150px] font-bold">Preencha todos os campos para concluir o pagamento:</h1>
      </div>
    </div>
  )
}

