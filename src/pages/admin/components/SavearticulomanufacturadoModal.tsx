import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as React from 'react';
import Row from 'react-bootstrap/Row';

import articulomanufacturado from '../../../types/articulomanufacturado';

type SavearticulomanufacturadoModalProps = {
  onHide: () => void;
  onSave: (p: articulomanufacturado) => void;
  articulomanufacturado: articulomanufacturado | null;
  show: boolean;
};

// ... (código existente)

const SavearticulomanufacturadoModal: React.FC<SavearticulomanufacturadoModalProps> = ({ onSave, onHide, articulomanufacturado, show }) => {
  // State
  const [validated, setValidated] = React.useState<boolean>(false);
  const [denominacion, setDenominacion] = React.useState<string>(articulomanufacturado?.denominacion || ''); 
  const [descripcion, setDescripcion] = React.useState<string>(articulomanufacturado?.descripcion || ''); 
  const [precioventa, setprecioventa] = React.useState<number>(articulomanufacturado?.precioVenta || 0); 
  const [tiempoestimadococina, settiempoestimadococina] = React.useState<number>(articulomanufacturado?.tiempoEstimadoCocina || 0);

  // Handlers
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    onSave({ ...articulomanufacturado!, denominacion, descripcion, precioVenta: precioventa, tiempoEstimadoCocina: tiempoestimadococina });
  };

  // Render
  return (
    <Modal show={show} onHide={onHide}>
      <Form noValidate onSubmit={handleSubmit} validated={validated}>
        <Modal.Header closeButton>
          <Modal.Title>{articulomanufacturado?.id === 0 ? 'Create' : 'Edit'} Articulo Manufacturado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Denominacion</Form.Label>
              <Form.Control
                value={denominacion}
                onChange={(e) => setDenominacion(e.target.value)}
                name="denominacion"
                placeholder="Denominacion"
                required
                type="text"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                name="descripcion"
                placeholder="Descripcion"
                required
                type="text"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Precio Venta</Form.Label>
              <Form.Control
                value={precioventa}
                onChange={(e) => setprecioventa(Number(e.target.value))}
                name="precioventa"
                placeholder="precioventa"
                required
                type="number"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Tiempo estimado cocina</Form.Label>
              <Form.Control
                value={tiempoestimadococina}
                onChange={(e) => settiempoestimadococina(Number(e.target.value))}
                name="tiempoestimadococina"
                placeholder="tiempoestimadococina"
                required
                type="number"
              />
            </Form.Group>
          </Row>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary">
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default SavearticulomanufacturadoModal;