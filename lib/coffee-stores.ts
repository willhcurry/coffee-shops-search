import { MapboxType } from '@/types';

const transformCoffeeData = (result: MapboxType) => {
  return {
    id: result.id,
    address: result.properties?.address || '',
    name: result.text,
    imgUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };
};

const getListOfCoffeeStorePhotos = async () => {
  try {
    const response = await fetch(
      `https:api.unsplash.com/search/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&query="coffee shop"&page=1&perPage=10`
    );
    const photos = await response.json();
    const results = photos?.results || [];
    return results?.map((result: { urls: any }) => result.urls['small']);
  } catch (error) {
    console.error('Error retrieving a photo', error);
  }
};

export const fetchCoffeeStores = async (longLat: string, limit: number) => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?limit=${limit}proximity=${longLat}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_API}`
    );
    const data = await response.json();
    const photos = await getListOfCoffeeStorePhotos();

    
    return data.features.map((result: MapboxType) =>
      transformCoffeeData(result)
    );
  } catch (error) {
    console.error('Error while fetching coffee stores', error);
  }
};

export const fetchCoffeeStore = async(id: string) => {
    try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${id}.json?proximity=ip&access_token=${process.env.NEXT_PUBLIC_MAPBOX_API}`
    );
      const data = await response.json();
      const photos = await getListOfCoffeeStorePhotos();

        const coffeeStore = data.features.map((result: MapboxType) =>
            transformCoffeeData(result)
        );
        
    return coffeeStore.length > 0 ? coffeeStore[0] : {};
    
  } catch (error) {
    console.error('Error while fetching coffee stores', error);
  }
}