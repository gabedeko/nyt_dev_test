import React from 'react'

import Header from '../components/header'
import Hero from '../components/hero' 
import Grid from '../components/grid'
import Video from '../components/video' 
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
            <Video />
            <More />
            <Subscription />
            <Footer />
        </div>
    )
}

export default Landing;