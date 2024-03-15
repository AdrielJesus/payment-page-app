import axios from 'axios';

import configData from '../../config.json';

export const getAllItems = async () => {
  try {
    const response = await axios.get(
      `${configData.API_URL}/api/v2/orders`,
      {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzM DZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_ TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrq AF fnPldd8QzWvgVQ'}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error al obtener las ordenes:', error);
    throw error;
  }
};

export const createOrder = async (categoria) => {
  try {
    const response = await axios.post(
      `${configData.API_URL}/api/v2/orders`,
      categoria
    );
    return response;
  } catch (error) {
    throw error;
  }
};



