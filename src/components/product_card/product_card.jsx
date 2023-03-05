import Button from '../button/button';

import './product_card.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product_card_container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};
export default ProductCard;

