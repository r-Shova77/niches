import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import Banner from './Banner/Banner';
import HomeReview from './HomeReview/HomeReview';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeProducts></HomeProducts>
      <HomeReview></HomeReview>
    </div>
  );
};

export default Home;
