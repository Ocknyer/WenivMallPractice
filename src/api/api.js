import axios from "axios";

// const apiUrl = "http://35.76.53.28:8080/"; 바꿔주기
const apiUrl = "https://test.api.weniv.co.kr/";

const instance = axios.create({
  baseURL: apiUrl,
});

export const getProductData = async () => {
  try {
    const response = await instance.get("mall");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
