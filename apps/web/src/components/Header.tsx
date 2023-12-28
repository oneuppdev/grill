import { BsCart3 } from 'react-icons/bs';
import { PiSquaresFour } from 'react-icons/pi';
import { BiBowlRice } from 'react-icons/bi';

import { Button } from '@components/button';

const Header = (): JSX.Element => {
  return (
    <header className='flex items-center justify-between bg-white p-6'>
      <article className='flex items-center gap-4'>
        <Button variant='icon' className='text-[#FF8A00]'>
          <BiBowlRice />
        </Button>
        <span>IEG</span>
      </article>
      {/* active color #FF8A00 */}
      <ul className='hidden gap-11 font-sans text-sm font-normal text-[#311F09] lg:flex'>
        <li>Home</li>
        <li>Menu</li>
        <li>About us</li>
        <li>Order online</li>
        <li>Reservation</li>
        <li>Contact us</li>
      </ul>
      <section className='flex gap-5'>
        <Button variant='icon' className='text-[#FF8A00]'>
          <BsCart3 />
        </Button>
        <Button variant='icon' className='text-[#FF8A00] lg:hidden'>
          <PiSquaresFour />
        </Button>
        <Button className='hidden lg:inline-block'>Log In</Button>
      </section>
    </header>
  );
};

export default Header;
