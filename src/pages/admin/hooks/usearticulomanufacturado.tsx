import * as React from 'react';

import DataLayer from '../../../services/data-layer';
import articulomanufacturado from '../../../types/articulomanufacturado';

type UsearticulomanufacturadoState = {
  data: articulomanufacturado[];
  error: any;
  loading: boolean;
};

const initialState: UsearticulomanufacturadoState = {
  data: [],
  error: null,
  loading: true,
};

const usearticulomanufacturado = () => {
  // State
  const [state, setState] = React.useState<UsearticulomanufacturadoState>(initialState);

  // Effects
  React.useEffect(function fetcharticulomanufacturado() {
    DataLayer.fetch.articulomanufacturado()
      .then((data: articulomanufacturado[]) => setState({ data, error: null, loading: false }))
      .catch((error: any) => setState({ data: [], error, loading: false }));
  }, [setState]);

  return state;
};

export default usearticulomanufacturado;