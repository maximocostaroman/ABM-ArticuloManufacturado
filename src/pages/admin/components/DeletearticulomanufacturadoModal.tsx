import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as React from 'react';

import articulomanufacturado from '../../../types/articulomanufacturado';

type DeletearticulomanufacturadoModalProps = {
  onDelete: () => void;
  onHide: () => void;
  articulomanufacturado: articulomanufacturado | null;
  show: boolean;
};


const DeletearticulomanufacturadoModal: React.FC<DeletearticulomanufacturadoModalProps> = ({ onDelete, onHide, articulomanufacturado: articulomanufacturado, show }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Eliminar ArticuloManufacturado</Modal.Title>
    </Modal.Header>
    <Modal.Body>Está seguro que quiere eliminar el siguiente Articulo Manufacturado: <strong>{articulomanufacturado?.denominacion}</strong> <strong>{articulomanufacturado?.descripcion}</strong>?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cerrar
      </Button>
      <Button variant="danger" onClick={onDelete}>
        Eliminar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default DeletearticulomanufacturadoModal;
