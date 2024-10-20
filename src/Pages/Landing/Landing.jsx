import React from 'react'
import LayOut from '../../Component/Layout/LayOut'
import CarouselEffect from '../../Component/Carousel/CarouselEffect';
import Category from '../../Component/Category/Category';
import Product from '../../Component/Product/Product';

function Landing() {
  return (
    <LayOut>
      <CarouselEffect/>
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing
