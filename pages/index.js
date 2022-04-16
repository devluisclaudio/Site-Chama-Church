import React from 'react';

import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import CarrosselEventos from '../components/CarrosselEventos';

import { Jumbotron, Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

function Home() {
    return (
        <div>
            <Head>
                <title>Home - Chama Church</title>
                <meta name="description" content="Chama Church - Minha Igreja, minha família" />
            </Head>

            <Menu />

            <Jumbotron fluid className="descr-top-chamachurch">
                <style>
                    {`.descr-top-chamachurch{
                        background-image: url('./img/chamachurch_1.jpg');
                        background-repeat: no-repeat;
                        background-size: cover;
                        color: #fff;
                        margin-bottom: -0.5rem !important;
                    }
                    
                    .logo-img-chamachurch{
                        border-radius: 80px;
                        width: 160px;
                        heigth: 160px;
                    }
                    .titulo-1-chamachurch{
                        font-family: "Times New Roman", Times, serif;
                        font-weight: bold;
                        text-shadow: 0 1px 0 #cccccc, 
                        0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb,  
                        0 0 5px rgba(0, 0, 0, 0.1), 
                        3px 5px 10px #ff4700,
                        0 1px 3px rgba(0, 0, 0, 0.3);
                        
                    }
                    .slogan-chamachurch{
                        font-family: "Times New Roman", Times, serif;
                        font-weight: bold;
                        font-size: 40px;
                        text-shadow: 0 1px 0 #cccccc, 
                        0 1.5px 0 #c9c9c9, 0 2px 0 #bbbbbb,  
                        0 0 5px rgba(0, 0, 0, 0.1), 
                        3px 5px 10px #ff4700,
                        0 1px 3px rgba(0, 0, 0, 0.3);
                    }
                    .app{
                        font-family: "Times New Roman", Times, serif;
                        font-weight: bold;
                        font-size: 20px;
                    }`}
                </style>
                <Container className="text-center">
                    <img className="logo-img-chamachurch" src="img/chama.jpg" />
                    <h1 className="display-4 titulo-1-chamachurch">Chama Church</h1>
                    <p className="lead slogan-chamachurch">Minha igreja, minha família.</p>
                    <p className="lead">
                        <a href='/app' className="btn btn-outline-warning btn-lg mt-4 app">Nosso App</a>
                    </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="pilares-chamachurch">
                <style>
                    {`.pilares-chamachurch{
                        background-color: #000;
                        margin-bottom: 0rem !important;
                    }
                    .pilares-chamachurch .circulo{
                        font-size: 42px;
                        background-color: #000;
                        color: #fff;
                    }
                    .centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }
                    .pilares-chamachurch p{
                        color: #ff4700;
                        font-weight: bold;
                        text-shadow: 1px 3px 10px #ff4700;
                    }
                    `}
                </style>
                <Container className="text-center">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="church" size="1x" />
                            </div>
                            <p>Adoração</p>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="users" size="1x" />
                            </div>
                            <p>Comunhão</p>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="heart" size="1x" />
                            </div>
                            <p>Serviço</p>
                        </div>
                        <div className="col-md-2 col-6 ">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="bible" size="1x" />
                            </div>
                            <p>Evangelismo</p>
                        </div>
                        <div className="col-md-2 col-12">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="pray" size="1x" />
                            </div>
                            <p>Discipulado</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
           
            <Jumbotron fluid className="eventos-chamachurch">
                <style>
                    {`.eventos-chamachurch{
                        background-color: #000;
                        color: #fff;
                        margin-bottom: 0rem !important;
                        margin-top: -3rem !important;
                    }
                    hr {
                        border-top: 2px solid #ff4700;
                        box-shadow: 0 10px 10px -10px #ff4700 inset;
                        height: 10px;
                        width: 80%;
                        margin: 0 auto;
                        border-radius: 5px;
                      }
                    
                    @media screen and (max-width: 700px) {
                       
                    }`}
                </style>
                <hr></hr>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Eventos e Conferências</h2>
                        <p className="lead pb-4">Fique por dentro dos próximos eventos</p>
                    </div>     
                    <CarrosselEventos/>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="localidades-chamachurch">
                <style>
                    {`.localidades-chamachurch{
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }
                    
                    .localidades-chamachurch .circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #000;
                        font-size: 42px;
                        color: #fff;
                        padding-top: 24px;
                    }.centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }
                    `}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Localidades</h2>
                        <p className="lead pb-4">Chama Church mais próxima de você</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="church" size="2x" />
                            </div>
                            <h2 className="mt-4">Chama Church </h2><h4>Manaus - Sede</h4>
                            <p>
                                Avenida Bispo Pedro Massa, Manaus-AM, Cep: 6909900
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="church" size="2x" />
                            </div>
                            <h2 className="mt-4">Chama Church </h2><h4>Manacapuru</h4>
                            <p>
                                Avenida Bispo Pedro Massa, Manaus-AM, Cep: 6909900
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="church" size="2x" />
                            </div>
                            <h2 className="mt-4">Chama Church </h2><h4> Moçambique</h4>
                            <p>
                                Avenida Bispo Pedro Massa, Manaus-AM, Cep: 6909900
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="descr-top-2-chamachurch">
                <style>
                    {`.descr-top-2-chamachurch{
                        background-color: #000;
                        color: #fff;
                        margin-bottom: 0rem !important;
                    }
                    
                    .logo-img-chamachurch-2{
                        width: 300px;
                        height: 200px;
                        margin: 5px 0;
                        border:solid 2px #ffc107;
                    }
                    .title-2{
                        font-size: 25px;
                        font-family: "Times New Roman", Times, serif;
                        font-weight: bold;
                        color: #ffc107;
                    }
                    .caixa{
                        width:200px;
                        height: 200px;
                        border:solid 2px #ffc107;
                        margin: 5px 0;
                        
                    }
                    @media screen and (max-width: 770px) {
                        .caixa{
                            margin: auto;
                            height: 70%;
                            min-width: 70%;
                            
                        }  
                        .logo-img-chamachurch-2{
                            min-width: 70%;
                            max-width: 70%;
                            height: 60%;
                            margin: auto;
                        }
                    }`}
                </style>
                <Container >
                    <div className="row justify-content-center">
                        <img className="logo-img-chamachurch-2" src="./img/chamachurch_2.jpg" />
                        <div className="col-6 caixa text-center pt-5">
                            <p className="title-2">Ap. Richard Mattos</p>
                            <p className="lead">"Ser uma igreja onde os sem igreja e os feridos pela religiosidade chamam de a minha casa."</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="stream-chamachurch">
                <style>
                    {`.stream-chamachurch{
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }
                    
                    .stream-chamachurch .circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #000;
                        font-size: 42px;
                        color: #fff;
                        padding-top: 24px;
                    }.centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }
                    .responsive-iframe{
                        width: 560px;
                        height: 315px;
                    }
                    @media screen and (max-width: 700px) {
                        .responsive-iframe{
                            width: 350px;
                            height: 230px;
                        }
                    }
                    `}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Streams</h2>
                        <p className="lead pb-4">Transmissão ao vivo, todos os domingos pelos canais.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/vGUoBZNKjbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
                            </div>
                            <h2 className="">Chama Church </h2><p className="lead">
                                <a target="_blank" href='https://www.youtube.com/channel/UCjSnT9JJSitFS4JotsB727Q' className="btn btn-warning btn-lg app">Inscreva-se</a>
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            <Rodape />
        </div>
    );
}

export default Home;