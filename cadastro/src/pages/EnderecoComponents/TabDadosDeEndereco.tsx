import { useNavigate } from "react-router-dom";


import InputCep from "../../components/InputCep";
import InputCidades from "../../components/InputCidades";
import InputEstados from "../../components/InputEstados";

import Endereco from "./Endereco";
import EnderecoContextdiv from "./EnderecoContext";

export default function () {
    let navigate = useNavigate()
    return <>
    
        <EnderecoContextdiv>
   
            <h1>Cadastro: Dados de Endereço</h1>
            
            <div id="divDados">
                <div id="cadeoespaco"></div>
                <Endereco />
                
                <div id="inputUf-box">
                    <InputEstados />
                </div>
                <div id="inputCid-box">
                    <InputCidades />
                </div>
                <div id="inputCep-box">
                    <InputCep />
                </div>
                <div id="loginHome">
                    <button  id="buttonLogin" onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
        </EnderecoContextdiv>
    </>
}