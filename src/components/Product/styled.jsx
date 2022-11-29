import styled from "styled-components";

export const ProductWrapper = styled.li`
  width: 380px;
  position: relative;
  cursor: pointer;

> img {
    width: 380px;
    height: 380px;
    border: 1px solid #bdbdbd;
    border-radius: 10px;
  }

  p {
    line-height: 20px;
    margin-top: 10px;

    span {
      font-size: 16px;
      line-height: 20px;
      margin-left: 10px;
    }

    .discount {
      font-weight: 400;
      color: #828282;
      text-decoration-line: line-through;
    }

    .percent {
      font-weight: 700;
      color: #6327fe;
    }
  }

  .product-title {
    width: 90%;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-top: 20px;
  }

  .like-btn {
    width: 22px;
    height: 22px;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    position: absolute;
    top: 402px;
    right: 0;
    z-index: 100;

    img {
      width: 100%;
    }
  }

  strong {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
  `
;