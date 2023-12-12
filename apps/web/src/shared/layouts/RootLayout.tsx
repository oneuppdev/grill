import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '@components/navigationBar';

const RootLayout = (): JSX.Element => {
  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area="nav">
        <NavigationBar />
      </GridItem>
      <GridItem area="main">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
