import { useLocation } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import ProductDetailImage from '../../components/ProductDetailImage/ProductDetailImage';

const ProductDetailPage = () => {
    const location = useLocation();
    // console.log(location);

    return (
        <>
            <ProductDetail locationData={location}/>
            <ProductDetailImage locationData={location}/>
        </>
    )
}

export default ProductDetailPage;