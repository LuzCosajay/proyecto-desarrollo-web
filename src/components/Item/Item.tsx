import './Item.scss';

function Item() {
  return (
    <div className="item-card">
      <p className="title">Meta 1</p>

      <p className="label">Descripción</p>
      <p className="text">Descripción de la meta</p>

      <p className="label">Fecha de vencimiento</p>
      <p className="date">15/04/2026</p>

      <button className="remove-btn">Eliminar</button>
    </div>
  );
}

export default Item;