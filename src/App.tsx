import { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Item from './components/Item/Item';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="app-page">
      <header className="top-navbar">
        <div className="nav-left">
          <div className="logo">⚛</div>
          <span>Tasks</span>
          <span>Goals</span>
        </div>
      </header>

      <Container fluid className="main-content">
        <Row>
          <Col md={6} className="form-section">
            <div className="fake-form">
              <label>Name</label>
              <div className="fake-input"></div>

              <label>Description</label>
              <div className="fake-input fake-input-lg"></div>

              <label>Due Date</label>
              <input type="date" className="real-input" />

              <Button className="add-goal-btn">ADD GOAL</Button>
            </div>
          </Col>

          <Col md={6} className="cards-section">
            <div className="goals-scroll">
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </Col>
        </Row>
      </Container>

      <Button className="floating-btn" onClick={handleShow}>
        ADD GOAL
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="fake-form modal-form">
            <label>Name</label>
            <div className="fake-input"></div>

            <label>Description</label>
            <div className="fake-input fake-input-lg"></div>

            <label>Due Date</label>
            <input type="date" className="real-input" />

            <Button className="add-goal-btn">ADD GOAL</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;