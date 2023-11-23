import { useRef, useState } from 'react';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import { Lista } from '../components/Lista';
import { Link, useNavigate } from 'react-router-dom';



function Armario() {

    const navigate = useNavigate();
    let newId = Lista[Lista.length - 1].id + 1;

    const [paciente, setPaciente] = useState({
        id: newId,
        nome: '',
        sangue: '',
        dia: '',
        mes: '',
        ano: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Lista)
        Lista.push(paciente);
        navigate('/info')
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setPaciente({ ...paciente, [name]: value });
    };


    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <p className='armario-form-titulo'>Preencha o formulário com os dados do paciente:</p>
                            <form className='armario-form' onSubmit={handleSubmit}>
                                <div className='armario-form-info'>
                                    <input className="form-control armario-form-nome" type="text" placeholder="Digite o nome do alimento." name='nome' id='idnome' value={paciente.nome} required="required" onChange={handleChange}></input>
                                    <select className="form-control form-embalagens" name='sangue' id='idembalagem' value={paciente.sangue} onChange={handleChange} >
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
                                    <p className='armario-form-datas-titulo'>Preencha com a data de nascimento:</p>
                                    <div className='armario-form-datas'>
                                        <input class="form-control armario-form-datas-data" required="required" type="number" placeholder="Dia" id='dia' name='dia' aria-label="default input example" value={paciente.dia} onChange={handleChange}></input>
                                        <input class="form-control armario-form-datas-data" required="required" type="number" placeholder="Mês" id='mes' name='mes' aria-label="default input example" value={paciente.mes} onChange={handleChange}></input>
                                        <input class="form-control armario-form-datas-data" required="required" type="number" placeholder="Ano" id='ano' name='ano' aria-label="default input example" value={paciente.ano} onChange={handleChange}></input>
                                    </div>
                                </div>
                                <button type="submit" class="btn armario-form-button" id='btnSubmit'>Registrar paciente</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='armario'>
                <h1 className='armario-titulo'>Confira a sua lista de pacientes</h1>
                <button type="button" class="btn modal-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Registre um paciente!
                </button>

                <div className='armario-table-info'>
                    <p className='armario-table-titulo'>Seus pacientes:</p>
                    <table class="table armario-table">
                        <thead>
                            <tr>
                                <th scope="col armario-table-title" className='armario-table-title-item'>Nome</th>
                                <th scope="col armario-table-title" className='armario-table-title-item'>Tipo sanguineo</th>
                                <th scope="col armario-table-title" className='armario-table-title-item'>Dia de nascimento:</th>
                                <th scope="col armario-table-title" className='armario-table-title-item'>Editar / Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Lista.map((item, indice) => (
                                <tr key={indice}>
                                    <td className='armario-table-item'>{item.nome}</td>
                                    <td className='armario-table-item'>{item.sangue}</td>
                                    <td className='armario-table-item'>{item.dia} / {item.mes} / {item.ano}</td>
                                    <td>
                                        <Link to={`/editar/paciente/${item.id}`}>
                                            <Editar />
                                        </Link>{' '}
                                        <Link to={`/excluir/paciente/${item.id}`}>
                                            <Excluir />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Armario