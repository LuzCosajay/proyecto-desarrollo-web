import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useTaskStore, type Task } from '../../store/taskStore';
import { useGoalStore, type Goal } from '../../store/goalStore';
import { useMenuStore } from '../../store/menuStore';

import './Item.scss';

function Item(props: Task | Goal) {
  const active = useMenuStore((state) => state.menu.active);
  const removeTask = useTaskStore((state) => state.removeTask);
  const removeGoal = useGoalStore((state) => state.removeGoal);

  const handleRemove = () => {
    if (active === 'tasks') {
      removeTask(props as Task);
    } else {
      removeGoal(props as Goal);
    }
  };

  return (
    <Card className="item-card">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <Card.Text className="fw-bold">Descripción</Card.Text>
        <Card.Text>{props.description}</Card.Text>

        <Card.Text className="fw-bold">Fecha de vencimiento</Card.Text>
        <Card.Text>{props.duedate}</Card.Text>

        <Button variant="info" onClick={handleRemove}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;