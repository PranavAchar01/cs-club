import React from 'react';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Competitions from '../components/Competitions';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Competitions />
            <Services />
            <Portfolio />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;
