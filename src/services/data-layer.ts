import articulomanufacturado from "../types/articulomanufacturado";

const API_BASE_URL: string = 'https://elbuensabor-gaqt.onrender.com/api/v1/articulosmanufacturados';

const fetchApiCall = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE', id?: number, payload?: articulomanufacturado): Promise<any> => {
  const options: any = { headers: { 'Content-Type': 'application/json' }, method };

  if (payload) {
    options.body = JSON.stringify(payload);
  }

  try {
    const response = await fetch(id ? `${API_BASE_URL}/${id}` : API_BASE_URL, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchApiCall:', error);
    throw error; // Re-lanza el error para que pueda ser manejado externamente
  }
};

const fnCreatearticulomanufacturado = async (articulomanufacturado: articulomanufacturado) => {
  try {
    return await fetchApiCall('POST', undefined, articulomanufacturado);
  } catch (error) {
    if (error instanceof Error && error.message.includes('HTTP error! Status: 409')) {
      // Manejar específicamente el error de conflicto (por ejemplo, duplicado)
      console.error('Error en la creación: El artículo manufacturado ya existe.', error);
      throw new Error('Error en la creación: El artículo manufacturado ya existe.');
    } else {
      // Manejar otros errores
      console.error('Error en la creación:', error);
      throw error;
    }
  }
};

const fnDeletearticulomanufacturado = async (id: number) => fetchApiCall('DELETE', id);
const fnFetcharticulomanufacturado = async () => fetchApiCall('GET');
const fnUpdatearticulomanufacturado = async (articulomanufacturado: articulomanufacturado) => fetchApiCall('PUT', articulomanufacturado.id, articulomanufacturado);

type DataLayer = {
  create: {
    articulomanufacturado: typeof fnCreatearticulomanufacturado,
  },
  delete: {
    articulomanufacturado: typeof fnDeletearticulomanufacturado,
  },
  fetch: {
    articulomanufacturado: typeof fnFetcharticulomanufacturado,
  },
  update: {
    articulomanufacturado: typeof fnUpdatearticulomanufacturado,
  }
};

const DataLayer: DataLayer = {
  create: {
    articulomanufacturado: fnCreatearticulomanufacturado,
  },
  delete: {
    articulomanufacturado: fnDeletearticulomanufacturado,
  },
  fetch: {
    articulomanufacturado: fnFetcharticulomanufacturado,
  },
  update: {
    articulomanufacturado: fnUpdatearticulomanufacturado,
  }
};

export default DataLayer;
