import Alert from "react-bootstrap/Alert";
import * as React from 'react';
import Spinner from "react-bootstrap/Spinner";

import usearticulomanufacturado from "./hooks/usearticulomanufacturado";

// Importa el componente correctamente
import ArticuloManufacturadoTable from './components/articulomanufacturadoTable';

const Admin: React.FC = () => {
  // Utils
  const { data, error, loading } = usearticulomanufacturado();

  // Render
  if (error) {
    return (
      <Alert variant="danger">
        {error?.message || 'Something went wrong while fetching articulomanufacturado.'}
      </Alert>
    );
  }

  return loading ? (
    <div style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center', width: '100wh' }}>
      <Spinner animation="border" />
    </div>
  ) : (
    <React.Suspense fallback={<Spinner animation="border" />}>
      {/* Utiliza el nombre correcto del componente */}
      <ArticuloManufacturadoTable articulomanufacturado={data} />
    </React.Suspense>
  );
};

export default Admin;
