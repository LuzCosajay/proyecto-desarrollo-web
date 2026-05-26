import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';

import { useTaskStore } from '../../store/taskStore';
import { useGoalStore } from '../../store/goalStore';
import { useMenuStore } from '../../store/menuStore';

import './Form.scss';

type FormComponentProps = {
  onAdd?: () => void;
};

function FormComponent({ onAdd }: FormComponentProps) {
  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefDescription = useRef<HTMLTextAreaElement>(null);
  const inputRefDueDate = useRef<HTMLInputElement>(null);

  const active = useMenuStore((state) => state.menu.active);
  const addTask = useTaskStore((state) => state.addTask);
  const addGoal = useGoalStore((state) => state.addGoal);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = inputRefName.current?.value;
    const description = inputRefDescription.current?.value;
    const duedate = inputRefDueDate.current?.value;

    if (name && description && duedate) {
      const newItem = {
        name,
        description,
        duedate,
      };

      if (active === 'tasks') {
        await addTask(newItem);
      } else {
        await addGoal(newItem);
      }

      inputRefName.current!.value = '';
      inputRefDescription.current!.value = '';
      inputRefDueDate.current!.value = '';

      if (onAdd) {
        onAdd();
      }
    }
  };

  return (
    <Form className="goal-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control ref={inputRefName} type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control ref={inputRefDescription} as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control ref={inputRefDueDate} type="date" />
      </Form.Group>

      <Button variant="info" type="submit">
        ADD GOAL
      </Button>
    </Form>
  );
}

export default FormComponent;