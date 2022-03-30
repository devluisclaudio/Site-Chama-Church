import React from 'react';

import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { Container, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Faleconosco() {
  return (
    <div>
    <Head>
        <title>Fale Conosco - Chama</title>
        <meta name="description" content="Solicitar  e pedir oração para igreja" />
    </Head>

  
      <Menu />

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
              background-color: #000;
              color: #fff;
              padding-top: 40px;
              padding-bottom: 40px;
              margin-bottom: 0rem !important;
          }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Fale conosco</h1>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="form-orcamento">
        <style>
          {`.form-orcamento{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: #fff;
              margin-bottom: 0rem !important;
            }`}
        </style>
        <Container>
          <Form>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="Prencha com o nome completo" />
            </FormGroup>

            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input type="email" name="email" id="email" placeholder="Prencha com o seu melhor e-mail" />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Telefone</Label>
              <Input type="text" name="phone" id="phone" placeholder="(XX) XXXX-XXXX" />
            </FormGroup>

            <FormGroup>
              <Label for="whatsApp">WhatsApp</Label>
              <Input type="text" name="whatsApp" id="whatsApp" placeholder="(XX) XXXX-XXXX" />
            </FormGroup>

            <FormGroup>
              <Label for="projeto">O que deseja conversar?</Label>
              <Input type="textarea" name="projeto" id="projeto" placeholder="Fale um pouco do sobre o assunto..." />
            </FormGroup>

            <Button type="submit" outline color="primary">Solicitar</Button>
          </Form>
        </Container>
      </Jumbotron>

      <Rodape />
    </div>
  );
}

export default Faleconosco;