import '../Home/home.css';
import Routes from '../../routes/Routes';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';


function Home() {
  return (
    <div className="container-home">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  )
}
export default Home;