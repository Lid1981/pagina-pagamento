import { useState } from "react";
import BackCard from "./components/BackCard";
import CardFront from "./components/FrontCard";

export default function App() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [mes, setMes] = useState("0");
  const [ano, setAno] = useState(0);
  const [cvv, setCvv] = useState(0);
  const [senha, setSenha] = useState("");

  function pagar(){
    console.log(nome)
    console.log(numero)
    console.log(mes)
    console.log(ano)
    console.log(cvv)
    console.log(senha)
  }

  return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] h-full bg-[#9400D3]">
        <div className="absolute top-10 left-70">
          <CardFront />
        </div>
        <div className="absolute top-95 left-100">
          <BackCard />
        </div>
      </div>
      <div className="w-[60%] relative h-full flex items-end p-[50px] flex-col">
        <h1 className="text-[#9400D3] text-[45px] w-[80%] h-[150px] font-bold">Preencha todos os campos para concluir o pagamento:</h1>
        <div className="w-[60%] h-auto min-h-[200px] flex flex-col gap-4">
          <div className="w-full flex flex-col">
            <label htmlFor="nome" className="font-bold text-[18px] text-[#808080]">Nome no Cartão</label>
            <input 
            onChange={(event) => setNome(event.target.value) }
            type="text" 
            className="w-full h-[40px] rounded-md text-[#808080] font-bold bg-[#D3D3D3] cursor-pointer hover:bg-[#9400D3]" />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="numero" className="font-bold text-[18px] text-[#808080]">Número do Cartão</label>
            <input 
            onChange={(event) => setNumero(event.target.value)} 
            type="number" 
            className="w-full h-[40px] rounded-md text-[#808080] font-bold bg-[#D3D3D3] cursor-pointer  hover:bg-[#9400D3]" />
          </div>
          <div className="flex">
            <div className="w-[70%] flex flex-col"> 
              <label htmlFor="" className="w-full h-[40px] rounded-md text-[18px] text-[#808080] font-bold">Data de Expiração</label>
              <div className="w-full flex gap-2">
                <input 
                onChange={(event) => setMes(event.target.value)}
                  type="number"
                  placeholder="mm"
                  className="w-[50%] h-[40px] rounded-md pl-2 bg-[#D3D3D3] cursor-pointer  hover:bg-[#9400D3] placeholder:font-bold" />
                <input 
                onChange={(event) => setAno(event.target.value)}
                  type="number"
                  placeholder="aa"
                  className="w-[50%] h-[40px] rounded-md pl-2 bg-[#D3D3D3] cursor-pointer hover:bg-[#9400D3] placeholder:font-bold" />
              </div>
            </div>
            <div className="w-[30%] pl-2 flex flex-col">
              <label htmlFor="" 
              className="w-full h-[40px] rounded-md text-[18px] text-[#808080] font-bold">CVV</label>
              <input 
              onChange={(event) => setCvv(event.target.value)}
              type= "number" 
              className="w-full h-[40px] rounded-md bg-[#D3D3D3] text-[#808080] hover:bg-[#9400D3] font-bold cursor-pointer" />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="" className="w-full h-[40px] rounded-md text-[18px] text-[#808080] font-bold">Senha do Cartão</label>
            <input 
            onChange={(event) => setSenha(event.target.value)}
            type="password" 
            className="-full h-[40px] rounded-md bg-[#D3D3D3] cursor-pointer hover:bg-[#9400D3]" />
          </div>
          <button 
          onClick={pagar}
          className="w-full h-[50px] rounded-md text-[#1C1C1C] font-bold bg-[#9400D3] hover:bg-[#808080] cursor-pointer">Pagar</button>
        </div>
      </div>
    </div>
  )
}

