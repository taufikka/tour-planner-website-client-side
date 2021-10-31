import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import StayPlace from '../StayPlace/StayPlace';

const Home = () => {
    // main home page components
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <StayPlace></StayPlace>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;