import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Item.scss';

function Item() {
  return (
    <Card className="item-card">
      <Card.Body>

        <Card.Title>Meta 1</Card.Title>

        <Card.Subtitle className="mb-2">
          <strong>Descripción</strong>
        </Card.Subtitle>

        <Card.Text>
          Descripción de la meta
        </Card.Text>

        <Card.Subtitle className="mt-3">
          <strong>Fecha de vencimiento</strong>
        </Card.Subtitle>

        <Card.Text>
          15/04/2026
        </Card.Text>

        <Button variant="info">Eliminar</Button>

      </Card.Body>
    </Card>
  );
}

export default Item;