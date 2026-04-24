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

  const setTasks = useTaskStore((state) => state.setTasks);
  const setGoals = useGoalStore((state) => state.setGoals);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTasks([
      {
        id: 1,
        name: 'Tarea 1',
        description: 'Descripción de la tarea 1',
        dueDate: '2026-04-15',
      },
      {
        id: 2,
        name: 'Tarea 2',
        description: 'Descripción de la tarea 2',
        dueDate: '2026-04-20',
      },
    ]);

    setGoals([
      {
        id: 1,
        name: 'Meta 1',
        description: 'Descripción de la meta 1',
        dueDate: '2026-04-15',
      },
      {
        id: 2,
        name: 'Meta 2',
        description: 'Descripción de la meta 2',
        dueDate: '2026-04-30',
      },
    ]);
  }, [setTasks, setGoals]);

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
              tasks.map((task) => <Item key={task.id} {...task} />)}

            {active === 'goals' &&
              goals.map((goal) => <Item key={goal.id} {...goal} />)}
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