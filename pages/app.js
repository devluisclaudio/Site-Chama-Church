import React from 'react';

import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { Container, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';


function App() {
  return (
    <div>
    <Head>
        <title>App - Chama Church</title>
        <meta name="description" content="App da chama church ..." />
    </Head>

  
      <Menu/>

      <Jumbotron fluid className="descr-top-chamachurch">
        <style>
          {`
          html, body, div{
            margin: 0;
            padding: 0;
            border: 0;
          }
          .descr-top-chamachurch{
              background-color: #050c3d;
              color: #00a1fc;
              padding-top: 40px;
              padding-bottom: 40px;
              height: 83vh;
              margin-bottom: 0rem !important;
          }`}
        </style>
        <Container className="text-center">
          <h1>Página em desenvolvimento da Chama Church</h1>
        </Container>
      </Jumbotron>

      
      <Rodape />
    </div>
  );
}

export default App;