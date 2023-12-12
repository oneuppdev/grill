import {
  HStack,
  List,
  ListItem,
  IconButton,
  Button,
  Show,
  Image,
} from '@chakra-ui/react';
import { PiShoppingCartBold } from 'react-icons/pi';
import { IoMdMenu } from 'react-icons/io';
import logo from '@assets/the-island-express-grill.png';

const NavigationBar = (): JSX.Element => {
  return (
    <HStack
      justifyContent={{
        lg: 'space-around',
        sm: 'space-between',
      }}
      padding={{
        lg: 0,
        sm: 4,
      }}
    >
      <Image src={logo} boxSize="80px" />
      <Show above="lg">
        <List display="flex" gap={12}>
          <ListItem>Home</ListItem>
          <ListItem>Menu</ListItem>
          <ListItem>About us</ListItem>
          <ListItem>Order online</ListItem>
          <ListItem>Reservation</ListItem>
          <ListItem>Contact us</ListItem>
        </List>
      </Show>
      <HStack>
        <IconButton
          aria-label="Shopping Cart"
          boxSize="50px"
          borderRadius="25px"
          icon={<PiShoppingCartBold />}
        />
        <Show below="lg">
          <IconButton
            aria-label="Menu"
            boxSize="50px"
            borderRadius="25px"
            icon={<IoMdMenu />}
          />
        </Show>
        <Show above="lg">
          <Button>Log in</Button>
        </Show>
      </HStack>
    </HStack>
  );
};

export default NavigationBar;
