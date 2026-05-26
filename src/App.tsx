import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Item from './components/Item/Item';
import FormComponent from './components/Form/Form';
import Menu from './components/Menu/Menu';

import { useMenuStore } from './store/menuStore';
import { useTaskStore } from './store/taskStore';
import { useGoalStore } from './store/goalStore';

import './App.scss';

function App() {
  const [show, setShow] = useState(false);

  const active = useMenuStore((state) => state.menu.active);

  const tasks = useTaskStore((state) => state.tasks);
  const goals = useGoalStore((state) => state.goals);

  const fetchTasks = useTaskStore((state) => state.fetchTasks);
  const fetchGoals = useGoalStore((state) => state.fetchGoals);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchTasks();
    fetchGoals();
  }, [fetchTasks, fetchGoals]);

  return (
    <>
      <Menu />

      <Container className="app-container">
        <Row>
          <Col md={4} className="form-desktop">
            <FormComponent />
          </Col>

          <Col md={8} className="items-column">
            {active === 'tasks' &&
              tasks.map((task) => <Item key={task._id} {...task} />)}

            {active === 'goals' &&
              goals.map((goal) => <Item key={goal._id} {...goal} />)}
          </Col>
        </Row>
      </Container>

      <Button className="floating-btn" onClick={handleShow}>
        ADD GOAL
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <FormComponent onAdd={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;