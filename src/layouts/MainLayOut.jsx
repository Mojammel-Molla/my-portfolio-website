import { Outlet } from 'react-router-dom';
import Navbar from './../components/navbar/Navbar';
import Footer from '../pages/home/Footer';

const MainLayOut = () => {
  return (
    <div className="mx-5">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
