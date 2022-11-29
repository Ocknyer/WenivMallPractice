import { useEffect, useState } from "react"
import cartImg from "../../asset/icon-shopping-cart.svg";
import heartImg from "../../asset/icon-heart.svg";
import heartOnImg from "../../asset/icon-heart-on.svg";
import { ProductDetailWrapper } from "./styled";

const ProductDetail = ({ locationData }) => {
    const [productData, setProductData] = useState();
    const [count, setCount] = useState(1);
    const [isLike, setIsLike] = useState(false);
    // console.log(locationData)
    // console.log(productData)

    useEffect(() => {
        if (locationData) {
            setProductData(() => {
                return {...locationData.state.data};
            });
        };
    }, []);

    const onClickCountHandler = (type) => {
        if (type === 'increment') {
            if (productData.stockCount > count) {
                setCount((prev) => prev + 1);
            }
        } else {
            if (count > 1) {
                setCount((prev) => prev - 1);
            }
        }
    }

    
    return (
        <ProductDetailWrapper>
            <h2 className="hidden">상품 정보 페이지</h2>
            {productData && (
                <div className="detail-main">
                    <img
                        src={`https://test.api.weniv.co.kr/${productData.thumbnailImg}`}
                        alt=""
                    />
                    <ul>
                        <li className="product-title">{productData.productName}</li>
                        <li className="product-price">
                            <strong>{(productData.price * 0.01 * (100-productData.discountRate)).toLocaleString()}</strong> 원
                        </li>
                        <li className="delivery">
                            택배배송 / {productData.shippingFee.toLocaleString()}원
                        </li>
                        <li className="quantity">
                            <div className="quantity-btn-box">
                                <button
                                    onClick={() => {
                                        onClickCountHandler();
                                    }}
                                >
                                -
                                </button>
                                <p>{count}</p>
                                <button
                                    onClick={() => {
                                        onClickCountHandler('increment');
                                    }}
                                >
                                +
                                </button>
                            </div>
                        </li>
                        <li className="product-result-box">
                            <span className="result-price">
                                <strong>{((productData.price * 0.01 * (100-productData.discountRate)) * count).toLocaleString()}</strong> 원
                            </span>
                        </li>
                        <li className="product-btn-box">
                            <button className="buy-btn">바로 구매</button>
                            <button className="cart-btn">
                                <img src={cartImg} alt="장바구니" />
                            </button>
                            <button
                                className="like-btn"
                                onClick={() => {
                                    setIsLike((prev) => !prev);
                                }}
                            >
                                <img src={isLike ? heartOnImg : heartImg} alt="좋아요" />
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </ProductDetailWrapper>
    )


}

export default ProductDetail;