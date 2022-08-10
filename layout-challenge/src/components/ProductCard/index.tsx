import './styles.css';

import CarImg from 'assets/images/car-card.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={CarImg} alt="Nome do produto" />
      </div>

      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, totam!</em></p>
        <button className='w-100'>Comprar</button>
      </div>
    </div>
  );
};

export default ProductCard;
