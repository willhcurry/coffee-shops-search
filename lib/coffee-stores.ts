import { MapboxType } from '@/types';

const transformCoffeeData = (result: MapboxType) => {
  return {
    id: result.id,
    address: result.properties?.address || '',
    name: result.text,
    imgUrl: '',
  };
};

export const fetchCoffeeStores = async () => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?proximity=-111.961904%2C40&access_token=${process.env.MAPBOX_API}`
    );
    const data = await response.json();

    return data.features.map((result: MapboxType) =>
      transformCoffeeData(result)
    );
  } catch (error) {
    console.error('Error while fetching coffee stores', error);
  }
};
