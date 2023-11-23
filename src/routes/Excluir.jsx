import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Lista } from '../components/Lista';

function ExcluirPaciente() {

    const { id } = useParams();
    const navigate = useNavigate();

    const recPacienteListaById = Lista.filter((item) => item.id == id);

    const [paciente] = useState({
        id: recPacienteListaById[0].id,
        nome: recPacienteListaById[0].nome,
        sangue: recPacienteListaById[0].sangue,
        dia: recPacienteListaById[0].dia,
        mes: recPacienteListaById[0].mes,
        ano: recPacienteListaById[0].ano,
    });

    const handleExclude = (event) => {
        event.preventDefault();
        let indice;
        Lista.forEach((item, index) => {
            if (item.id == paciente.id) {
                indice = index;
            }
        });
        Lista.splice(indice, 1);
        navigate('/info');
    };
    return (
        <>
            <div className='excluirproduto'>
                <h1 className='editar-titulo'>Excluir paciente:</h1>
                <div>
                    <p>Nome : {paciente.nome}</p>
                </div>
                <div className='excluir-buttons'>
                    <button onClick={handleExclude} className='btn excluir-button'>EXCLUIR</button>
                    <button onClick={() => navigate('/info')} className='btn excluir-button'>CANCELAR</button>
                </div>
            </div>
        </>
    )
}

export default ExcluirPaciente