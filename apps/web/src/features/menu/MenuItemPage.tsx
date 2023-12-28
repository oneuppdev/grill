import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import useStarters from '@hooks/queries/useStarters';
import { TMenuItem } from '@shared/types/TMenuItem';

const MenuItemPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { data } = useStarters();

  const menuItem: TMenuItem | undefined = React.useMemo(() => {
    return data?.find((item) => item._id === id);
  }, [id, data]);

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Back
      </Link>
      <h1>{menuItem?.title}</h1>
      <h2>{menuItem?.description}</h2>
    </>
  );
};

export default MenuItemPage;
