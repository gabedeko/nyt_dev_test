import React from 'react'

import Header from '../components/header'
import Hero from '../components/hero' 
import Grid from '../components/grid'
import Audio from '../components/audio' 
import More from '../components/more'
import Subscription from '../components/subscription' 
import Footer from '../components/footer'

//Profile Page
function Landing() {
        
    return (
        
        <div id="landing">
            <Header />
            <Hero />
            <Grid />
            <Audio />
            <More />
            <Subscription />
            <Footer />
        </div>
    )
}

export default Landing;