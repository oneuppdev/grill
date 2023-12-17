import { Row, Col } from 'react-bootstrap';

import MenuCard from '@components/menuCard';
import useStarters from '@hooks/queries/useStarters';

const HomePage = (): JSX.Element => {
  const { data } = useStarters();
  return (
    <>
      <h1>Starters</h1>
      <Row>
        {data?.map((menuItem) => (
          <Col key={menuItem._id} sm={12} md={6} lg={4} xl={3}>
            <MenuCard menuItem={menuItem} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
