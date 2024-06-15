import { Inter } from 'next/font/google';
import GridCards from './components/GridCards';
import Appbar from './components/Appbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Appbar />
      <GridCards />
    </>
  );
}
