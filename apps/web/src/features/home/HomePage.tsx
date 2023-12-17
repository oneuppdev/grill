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
    <>
      <Center mt={44}>
        <Stack
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
              Delivering high-quality food, and authentic culinary experience
              that brings together the vibrant flavors and rich traditions of
              Haiti and the Caribbean with a modern twist. We strive to offer
              our guests exceptional service and a warm, welcoming atmosphere
              that reflects the vibrant culture and hospitality of the islands.
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
      <Center mt={44}>
        <Stack
          display="flex"
          flexDirection={{
            lg: 'row',
            sm: 'column-reverse',
          }}
          alignItems="center"
          spacing={{
            lg: 4,
            sm: 8,
          }}
        >
          <Image
            src="https://images.pexels.com/photos/19362397/pexels-photo-19362397/free-photo-of-broccoli-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Steak"
            objectFit="cover"
            maxWidth={{
              lg: '50%',
              sm: '100%',
            }}
            borderRadius={12}
          />
          <VStack>
            <Heading>Our commitment</Heading>
            <Text>
              To source the freshest ingredients and crafting each dish with
              care ensures that every visit to The Island Express Grill is a
              unique and memorable experience, one that celebrates the spirit
              and diversity of the Caribbean.
            </Text>
          </VStack>
        </Stack>
      </Center>
      {/* <Center mt={16}>
        <Heading>Reserve your table</Heading>
      </Center> */}
      <Center mt={44}>
        <Heading>Our polular menu</Heading>
      </Center>
    </>
  );
};

export default HomePage;
