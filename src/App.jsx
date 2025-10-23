import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <Toaster />
            <Header />
            <About />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App
