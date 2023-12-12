import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '@components/navigationBar';

const RootLayout = (): JSX.Element => {
  return (
    <Grid
      templateAreas={`"nav nav" "main main"`}
      padding={{
        lg: 8,
        sm: 2,
      }}
    >
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
