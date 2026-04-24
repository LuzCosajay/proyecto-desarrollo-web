import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Item from './components/Item/Item';
import FormComponent from './components/Form/Form';
import Menu from './components/Menu/Menu';

import './App.scss';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Menu />

      <Container className="app-container">
        <Row>
          {/* Desktop: formulario visible */}
          <Col md={4} className="form-desktop">
            <FormComponent />
          </Col>

          {/* Lista de items */}
          <Col md={8} className="items-column">
            <Item />
            <Item />
            <Item />
          </Col>
        </Row>
      </Container>

      {/* Mobile: botón flotante */}
      <Button className="floating-btn" onClick={handleShow}>
        ADD GOAL
      </Button>

      {/* Modal con formulario */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <FormComponent />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;