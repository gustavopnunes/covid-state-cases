import axios from "axios";
import { useEffect, useState } from "react"
import { PanelStyled } from "./style"

export const Panel = () => {

    const [selectedState, setSelectedState] = useState("ac");
    const [data, setData] = useState([]);

    const handleSelect = e => {
        setSelectedState(e.target.value.toLowerCase())
    }

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${selectedState}`);
        setData(result.data);
    };
        fetchData();
    },[selectedState])

    return (
    <PanelStyled>
        <p>SELECIONE O ESTADO</p>
        <select id="estado" name="estado" onChange = {handleSelect} defaultChecked = "São Paulo">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
        </select>
        <hr />
        <h2>{data.state}</h2>
        <table>
            <tbody>
                <tr>
                    <th>CASOS CONFIRMADOS</th>
                </tr>
                <tr>
                    <td>{data.cases}</td>
                </tr>
                <tr>
                    <th>ÓBITOS CONFIRMADOS</th>
                </tr>
                <tr>
                    <td>{data.deaths}</td>
                </tr>
                <tr>
                    <th>ÓBITOS SUSPEITOS</th>
                </tr>
                <tr>
                    <td>{data.suspects}</td>
                </tr>
                <tr>
                    <th>ÓBITOS DESCARTADOS</th>
                </tr>
                <tr>
                    <td>{data.refuses}</td>
                </tr>
            </tbody>
        </table>
        </PanelStyled>
    )
}