import React from 'react';

import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { Container, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';


function Projetos() {
  return (
    <div>
    <Head>
        <title>Projetos - Chama</title>
        <meta name="description" content="Projetos a chama church ..." />
    </Head>

  
      <Menu/>

      <Jumbotron fluid className="descr-top">
        <style>
          {`
          html, body, div{
            margin: 0;
            padding: 0;
            border: 0;
          }
          .descr-top{
              background-color: #050c3d;
              color: #00a1fc;
              padding-top: 40px;
              padding-bottom: 40px;
              height: 83vh;
              margin-bottom: 0rem !important;
          }`}
        </style>
        <Container className="text-center">
          <h1>Página em desenvolvimento</h1>
        </Container>
      </Jumbotron>

      
      <Rodape />
    </div>
  );
}

export default Projetos;