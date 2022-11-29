import { useEffect, useState } from 'react';
import { ProductDetailImageWrapper } from './styled'

const ProductDetailImage = ({ locationData }) => {
    const [imageData, setImageData] = useState([])
    
    useEffect(() => {
        setImageData(locationData.state.data.detailInfoImage)
    })
    console.log(imageData)
    
    return (
        <ProductDetailImageWrapper>
            <h2 className='hidden'>상세 이미지</h2>
            {imageData.map((el, idx) => (
                <div key={idx}>
                    <img src={`https://test.api.weniv.co.kr/${el}`} alt="상세이미지" />
                </div>
            ))}
        </ProductDetailImageWrapper>
    )
}

export default ProductDetailImage;