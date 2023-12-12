import {
  HStack,
  VStack,
  Image,
  Text,
  Heading,
  Button,
  Center,
  Stack,
  Badge,
} from '@chakra-ui/react';

const HomePage = (): JSX.Element => {
  return (
    <Center mt={12}>
      <Stack
        height="80vh"
        display="flex"
        flexDirection={{
          lg: 'row',
          sm: 'column',
        }}
        alignItems="center"
        spacing={{
          lg: 4,
          sm: 8,
        }}
      >
        <VStack spacing={12}>
          <Badge
            alignSelf="flex-start"
            px={4}
            py={2}
            borderRadius={6}
            colorScheme="green"
          >
            The Island Express Grill
          </Badge>
          <Heading>Authentic Haitian &amp; Caribbean Cuisine</Heading>
          <Text>
            Delivering high-quality food, and authentic culinary experience that
            brings together the vibrant flavors and rich traditions of Haiti and
            the Caribbean with a modern twist. We strive to offer our guests
            exceptional service and a warm, welcoming atmosphere that reflects
            the vibrant culture and hospitality of the islands.
          </Text>
          <HStack>
            <Button>Order now</Button>
            <Button>Reservation</Button>
          </HStack>
        </VStack>
        <Image
          src="https://images.pexels.com/photos/19362408/pexels-photo-19362408/free-photo-of-meat-with-vegetables-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Steak"
          objectFit="cover"
          maxWidth={{
            lg: '50%',
            sm: '100%',
          }}
          borderRadius={12}
        />
      </Stack>
    </Center>
  );
};

export default HomePage;
