import React from 'react';
import '../Home/home.css';
import Routes from '../../routes/Routes';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="container-home">
      <NavBar />
      <Routes />
      <Link to="/list-users">
          <h3>Mostar listado de usuarios</h3>
        </Link>
      <Footer />
    </div>
  )
}
export default Home;