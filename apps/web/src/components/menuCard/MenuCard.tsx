import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { TMenuItem } from '@shared/types/TMenuItem';

export interface MenuCardProps {
  menuItem: TMenuItem;
}

const MenuCard = ({ menuItem }: MenuCardProps): JSX.Element => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/menu/${menuItem._id}`}>
        <Card.Img src={menuItem.heroImage} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/menu/${menuItem._id}`}>
          <Card.Title as='h2'>{menuItem.title}</Card.Title>
        </Link>
        <Card.Text as='h3'>{menuItem.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
