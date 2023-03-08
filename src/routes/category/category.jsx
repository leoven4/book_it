import { useContext, useState, useEffect, Fragment } from 'react';
// import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product_card/product_card';

import { CategoriesContext } from "../../context/categories";
import './category.scss';

const Category = (props) => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[props.category]);

  useEffect(() => {
    setProducts(categoriesMap[props.category]);
  }, [props.category, categoriesMap]);

  return (
    <Fragment>
      <p className="category_title">{props.category.toUpperCase()}</p>
      <div className="category_container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;