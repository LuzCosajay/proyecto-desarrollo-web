import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useMenuStore } from '../../store/menuStore';

import './Menu.scss';

function Menu() {
  const active = useMenuStore((state) => state.menu.active);
  const setActive = useMenuStore((state) => state.setActive);

  return (
    <Navbar expand="lg" variant="dark" className="menu-navbar">
      <Container>
        <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            activeKey={active}
            onSelect={(selectedKey) => setActive(selectedKey || 'tasks')}
          >
            <Nav.Link eventKey="tasks">Tareas</Nav.Link>
            <Nav.Link eventKey="goals">Metas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;