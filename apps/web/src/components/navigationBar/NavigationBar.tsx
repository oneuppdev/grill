import React from 'react';
import {
  HStack,
  List,
  ListItem,
  IconButton,
  Button,
  Show,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { PiShoppingCartBold } from 'react-icons/pi';
import { IoMdMenu } from 'react-icons/io';
import logo from '@assets/the-island-express-grill.png';

const NavigationBar = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDarkMode = React.useMemo(() => {
    return colorMode === 'dark';
  }, [colorMode]);

  return (
    <HStack
      justifyContent={{
        lg: 'space-around',
        sm: 'space-between',
      }}
    >
      <Image src={logo} boxSize="60px" />
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
        <IconButton
          aria-label="Color Mode"
          boxSize="50px"
          borderRadius="25px"
          icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
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
