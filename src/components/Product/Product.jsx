import { useState } from "react";
import { ProductWrapper } from "./styled";
import HeartIcon from '../../asset/icon-heart.svg'
import HeartOnIcon from '../../asset/icon-heart-on.svg'
import { useNavigate } from "react-router-dom";

const Product = ({ data, onClickLikeBtn }) => {
  const { thumbnailImg, price, productName, discountRate, id } = data;
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();
  // console.log(data)

  const onClickHandler = () => {
    navigate(`/product/${id}`, {
      state: {
        data: {...data}
      }
    });
  };

  
  return (
    <ProductWrapper onClick={onClickHandler}>
      <img src={`http://test.api.weniv.co.kr/${thumbnailImg}`} alt={productName} />
      <p className="product-title">{productName}</p>
        <button className="like-btn" onClick={(event) => {
          onClickLikeBtn(setIsLike);
          event.stopPropagation();
        }}>
          <img src={isLike ? HeartOnIcon : HeartIcon} alt="" />
        </button>
      <p>
        <strong>{(price * 0.01 * (100-discountRate)).toLocaleString()}</strong> 원
        {/* <strong>{Intl.NumberFormat().format(price)}</strong> 원 */}
        {!!discountRate && (
          <>
            <span className="discount">{price}원</span>
            <span className="percent">{discountRate}%</span>
          </>
        )}
      </p>
    </ProductWrapper>
  );
};

export default Product;
