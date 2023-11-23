import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Lista } from '../components/Lista';


function EditarPaciente() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recPacienteListaById = Lista.filter((item) => item.id == id);

    const [paciente, setPaciente] = useState({
        id: recPacienteListaById[0].id,
        nome: recPacienteListaById[0].nome,
        sangue: recPacienteListaById[0].sangue,
        dia: recPacienteListaById[0].dia,
        mes: recPacienteListaById[0].mes,
        ano: recPacienteListaById[0].ano,
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        let indice;
        Lista.forEach((item, index) => {
            if (item.id == paciente.id) {
                indice = index;
            }
        });

        Lista.splice(indice, 1, paciente);
        navigate('/info');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPaciente({ ...paciente, [name]: value });
    };

    return (
        <>
            <div className='editarproduto'>
                <h1 className='editar-titulo'>Editar:</h1>
                <form onSubmit={handleSubmit} className='editar-form'>
                    <div>
                        <input type='hidden' name='id' value={paciente.id} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='idNome' className='form-item'>Nome do paciente:</label>
                        <input className="form-control editar-form-input" type="text" placeholder="Digite o nome do alimento." name='nome' id='idnome' value={paciente.nome} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='idValor' className='form-item'>Tipo sanguineo:</label>
                        <select className="form-control editar-form-input" name='sangue' id='idembalagem' value={paciente.sangue} onChange={handleChange}>
                        <option>Selecione o tipo sanguineo</option>
                            <option value='A+'>A+</option>
                            <option value='A-'>A-</option>
                            <option value='B+'>B+</option>
                            <option value='B-'>B-</option>
                            <option value='AB+'>AB+</option>
                            <option value='AB-'>AB-</option>
                            <option value='O+'>O+</option>
                            <option value='O-'>O-</option>
                        </select>
                    </div>
                    <div className='armario-form-datas-info'>
                        <p className='form-item'>Preencha com a data de nascimento do paciente:</p>
                        <div className='editar-form-datas'>
                            <input class="form-control editar-form-input" type="number" placeholder="Dia" id='dia' name='dia' aria-label="default input example" value={paciente.dia} onChange={handleChange}></input>
                            <input class="form-control editar-form-input" type="number" placeholder="Mês" id='mes' name='mes' aria-label="default input example" value={paciente.mes} onChange={handleChange}></input>
                            <input class="form-control editar-form-input" type="number" placeholder="Ano" id='ano' name='ano' aria-label="default input example" value={paciente.ano} onChange={handleChange}></input>
                        </div>
                    </div>
                    <button type='submit' className='btn editar-button'>Editar</button>
                </form>
            </div>
        </>
    )
}

export default EditarPaciente