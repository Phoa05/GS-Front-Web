import { } from 'react'
import Logo from '../assets/Captura_de_tela_2023-11-22_200811-removebg-preview.png';
import Enfeite from '../assets/captura de tela 2023-11-23 202133.png';
import Enfeite2 from '../assets/bagulho vermelho .png';
import ImagemIngredientes from '../assets/medico1.png';
import ImagemReceitas from '../assets/medico2.png';
import Ruas from '../assets/medico3.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <main className='main'>
                <section className='sobre_nos'>
                    <img src={Logo} alt='Logo da empresa' className='sobre_nos-logo'/>
                    <div className="sobre_nos-textos">
                        <h1 className="sobre_nos-textos-titulo">Problema</h1>
                        <p className="sobre_nos-textos-texto">A gestão manual de registros hospitalares representa um desafio tanto para os médicos quanto para os pacientes. Especialmente os pacientes mais idosos ou com prioridades não podem passar horas em filas de espera. Diante disso, torna-se evidente a necessidade crescente de uma solução que integre registros eletrônicos e IoT para proporcionar uma gestão eficiente, acessível e proativa da saúde. Essa abordagem contribuirá significativamente para auxiliar nas tomadas de decisões e superar as dificuldades no monitoramento contínuo da saúde dos pacientes.</p>
                    </div>
                </section>

                <section className='importancia'>
                    <article className='importancia_div'>
                        <div className='importancia_textos'>
                            <h1 className='importancia_titulo'>Objetivo</h1>
                            <p className="importancia-texto">Desenvolvemos uma solução inovadora de gestão hospitalar que integra registros eletrônicos, IoT e medicina online. Nosso objetivo é proporcionar uma administração eficiente e acessível da saúde, reduzindo o tempo de espera, especialmente para pacientes vulneráveis. A implementação da medicina online permite consultas virtuais, melhorando o acesso à saúde e contribuindo para decisões informadas e ágeis. 
                            </p>
                        </div>
                        <img src={Enfeite} className='importancia_enfeite' alt='Enfeite visual' />
                    </article>
                    <article className='importancia_div'>
                        <img src={Enfeite} className='importancia_enfeite2' alt='Enfeite visual' />
                        <p className="importancia-texto2">Redefinindo o Cuidado Hospitalar com Tecnologia, Acesso Rápido e Compromisso com sua Segurança.</p>
                    </article>
                </section>


                <section className="como_trabalhamos">
                    <div className="como_trabalhamos-info">
                        <h1 className="como_trabalhamos-titulo">Como funcionamos?</h1>
                        <p className="como_trabalhamos-texto">A MediConnect, nossa solução de gestão hospitalar, integra registros eletrônicos e dispositivos IoT para segurança e eficiência. Registros eletrônicos têm acesso restrito, enquanto IoT monitora automaticamente saúde. Uma plataforma analítica alerta sobre condições médicas, e um aplicativo facilita acesso a registros e autogestão. Comprometemo-nos com o desenvolvimento seguro para um MediConnect funcional, permitindo monitoramento contínuo e detecção precoce de condições de saúde.</p>
                        <p className="como_trabalhamos-texto3">Para aproveitar nossos benefícios, basta entrar na rede MediConnect:</p>
                        <div className="como_trabalhamos-botoes">
                            <Link className="btn btn-primary como_trabalhamos-button" to="login" role="button">Login</Link>
                            <Link className="btn btn-primary como_trabalhamos-button" to="contato" role="button">Duvidas</Link>
                        </div>
                    </div>
                    <img src={Enfeite2} alt="Enfeite visual" className="trabalhamos_enfeite"/>
                </section>

                <section className='vantagens'>
                    <h1 className="vantagens-titulo">Vantagens</h1>
                    <div className="cards">
                        <article className="card">
                            <img src={ImagemReceitas} alt="Imagem-Desbrave novas receitas" className="imagem-card"></img>
                            <p className="card-texto">Velocidade no atendimento</p>
                        </article>
                        <article className="card">
                            <img src={ImagemIngredientes} alt="Imagem-Controle seus ingredientes" className="imagem-card"></img>
                            <p className="card-texto">Controle de pacientes</p>
                        </article>
                        <article className="card">
                            <img src={Ruas} alt="Imagem-Ajude a limpar as ruas" className="imagem-card"></img>
                            <p className="card-texto">Acesso remoto</p>
                        </article>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home