import ProductCard from 'components/ProductCard';
import './styles.css';

const Catalog = () => {
  return (
    <div className="container">
      <div className="row">
        <div>
          <div className='my-3 py-3 py-lg-4 px-2 px-lg-5 base-card'>
            <div className="py-lg-2 col-8 col-lg-9 input-group">
              <input
                type="text"
                className="form-control py-2 ms-lg-4 custom-placeholder"
                placeholder="Digite sua busca"
                aria-label="Carro a se buscar"
                aria-describedby="buscar"
              />
              <button className="py-lg-2 col-4 col-lg-3 me-lg-4 input-group-text btn btn-secondary custom-btn" id="buscar">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
