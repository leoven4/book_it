import Category from '../category/category';
import './shop.scss';

const Shop = (props) => {
  return (
    <Category category={props.category} />
  );
};
export default Shop;