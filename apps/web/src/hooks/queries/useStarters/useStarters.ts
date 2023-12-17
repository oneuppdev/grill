import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { faker } from '@faker-js/faker';

import { TMenuItem } from '@shared/types/TMenuItem';

const useStarters = (): UseQueryResult<TMenuItem[]> =>
  useQuery({
    queryKey: ['starters'],
    queryFn: () => [
      {
        _id: faker.string.uuid(),
        heroImage:
          'https://images.pexels.com/photos/12362298/pexels-photo-12362298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Plantain',
        description: 'Plantain on Black Ceramic Plate',
        isAvailable: true,
      },
      {
        _id: faker.string.uuid(),
        heroImage:
          'https://images.pexels.com/photos/19409029/pexels-photo-19409029/free-photo-of-food-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Potatoes',
        description: 'Full course meal',
        isAvailable: true,
      },
      {
        _id: faker.string.uuid(),
        heroImage:
          'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Chicken',
        description: 'Cooked Chicken on White Plate',
        isAvailable: true,
      },
      {
        _id: faker.string.uuid(),
        heroImage:
          'https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Chicken',
        description: 'Close-up Cooked Chicken',
        isAvailable: true,
      },
      {
        _id: faker.string.uuid(),
        heroImage:
          'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Fish',
        description: 'Fish Salad',
        isAvailable: true,
      },
    ],
  });

export default useStarters;
