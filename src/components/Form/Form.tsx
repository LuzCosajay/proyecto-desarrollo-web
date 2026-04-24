import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Form.scss';

function FormComponent() {
  return (
    <Form className="goal-form">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Button variant="info" type="submit">
        ADD GOAL
      </Button>
    </Form>
  );
}

export default FormComponent;