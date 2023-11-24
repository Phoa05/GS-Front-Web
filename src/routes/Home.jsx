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
                            <p className="importancia-texto">Desenvolver uma solução inovadora de gestão hospitalar que integre registros eletrônicos, IoT e medicina online. Buscamos proporcionar uma administração eficiente e acessível da saúde, reduzindo o tempo de espera, especialmente para pacientes vulneráveis como os idosos. A implementação da medicina online permitirá consultas virtuais, melhorando o acesso à saúde. O foco é contribuir para decisões informadas e ágeis, superando desafios na gestão manual de registros e promovendo uma transformação positiva na prestação de serviços de saúde, com ênfase na segurança da informação e privacidade dos pacientes. 
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
                        <p className="como_trabalhamos-texto">A MediConnect, nossa solução inovadora, integra registros eletrônicos e dispositivos IoT para transformar a gestão hospitalar. Os registros eletrônicos oferecem segurança e interoperabilidade, com acesso restrito a profissionais autorizados. Dispositivos IoT monitoram pressão arterial, frequência cardíaca e glicose, transmitindo dados automaticamente aos registros eletrônicos. Uma plataforma analítica processa e alerta sobre condições médicas precoces. O aplicativo para pacientes e profissionais proporciona acesso aos registros e recursos educativos, incentivando a autogestão. Nosso trabalho inclui o desenvolvimento do sistema, dispositivos IoT, plataforma analítica e aplicativo, priorizando medidas de segurança. Espera-se um MediConnect funcional, permitindo acesso em tempo real a dados, monitoramento contínuo da saúde, detecção precoce e engajamento proativo na autogestão da saúde.</p>
                        <p className="como_trabalhamos-texto2">E caso a data de validade se aproxime, você receberá a avisos, a forma correta de descarta-lo e a importância disso.</p>
                        <p className="como_trabalhamos-texto3">Para aproveitar nossos benefícios, basta entrar na rede KIT ON:</p>
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