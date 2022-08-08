import './styles.css';
import { ReactComponent as CarHeaderImage } from 'assets/images/car-header.svg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="car-container">
        <div className="car-header">
          <CarHeaderImage />
        </div>
        <div className="car-text-content">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="show-catalog-container">
        <button>Ver Catálogo</button>
        <p> Comece agora a navegar </p>
      </div>
    </div>
  );
};

export default Home;
