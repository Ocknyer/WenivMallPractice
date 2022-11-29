import { useEffect, useState } from "react";
import { getProductData } from "../../api/api";
import Product from "../Product/Product";
import { ProductListWrapper } from "./styled";

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData().then((data) => {
      setProductData(data);
    });
  }, []);

  const onClickLikeBtn = (setState) => {
    setState((prev) => !prev);
  }

  return (
    <ProductListWrapper>
      {productData.map((item) => (
        <Product key={item.id} data={item} onClickLikeBtn={onClickLikeBtn}/>
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
