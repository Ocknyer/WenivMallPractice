import styled from "styled-components";

export const ProductDetailWrapper = styled.section`
  .detail-main {
    width: 870px;
    display: flex;
    margin: 60px auto 42px;

    > img {
      width: 400px;
      border: 1px solid #c4c4c4;
      border-radius: 10px;
    }

    > ul {
      width: 440px;
      margin-left: 30px;

      li {
        width: 100%;
        line-height: 20px;
      }

      .product-title {
        font-size: 24px;
        line-height: 30px;
      }

      .product-price {
        margin-top: 10px;

        > strong {
          font-weight: 700;
          font-size: 24px;
          line-height: 30px;
        }
      }

      .delivery {
        margin-top: 100px;
        font-size: 16px;
        color: #828282;

        padding-bottom: 10px;
        border-bottom: 2px solid #e0e0e0;
      }
      .quantity {
        padding: 10px 0;
        border-bottom: 2px solid #e0e0e0;

        .quantity-btn-box {
          display: flex;
          width: 122px;
          height: 40px;
          border: 1px solid #bdbdbd;
          border-radius: 5px;

          p {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            border-left: 1px solid #bdbdbd;
            border-right: 1px solid #bdbdbd;
          }

          button {
            flex: 1;
            cursor: pointer;
          }
        }
      }
      .product-result-box {
        font-size: 18px;
        margin-top: 16px;
        display: flex;
        align-items: center;
        span {
          display: inline-block;
        }

        .result-title {
          font-weight: 500;
          line-height: 23px;
        }

        .result-quantity {
          color: #828282;
          margin-left: auto;
          line-height: 23px;
          position: relative;

          &::after {
            content: "";
            display: block;
            width: 2px;
            height: 18px;
            background: #c4c4c4;
            position: absolute;
            right: -14.5px;
            top: 4px;
          }
          > strong {
            font-weight: 700;
            color: #eb5757;
          }
        }
        .result-price {
          color: #eb5757;
          margin-left: 29px;

          > strong {
            font-weight: 700;
            font-size: 36px;
            line-height: 45px;
          }
        }
      }
      .product-btn-box {
        display: flex;
        gap: 6px;
        margin-top: 16px;

        button {
          cursor: pointer;
        }

        .buy-btn {
          width: 308px;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          cursor: pointer;
          background: #6327fe;
          color: #fff;
          padding: 19px 0;
          border-radius: 5px;
        }

        .cart-btn,
        .like-btn {
          width: 60px;
          height: 60px;
          border: 1px solid #bdbdbd;
          border-radius: 5px;
        }
      }
    }
  }
`;
