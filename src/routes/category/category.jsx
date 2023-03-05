import { useContext, useState, useEffect, Fragment } from 'react';
// import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product_card/product_card';

import { CategoriesContext } from "../../context/categories";
import './category.scss';

const Category = () => {
  // const { category } = useParams();
  const category  = "hats";

  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category_title">{category.toUpperCase()}</h2>
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