import React from 'react'
import Featured from '../../components/Featured/Featured'
import FeaturedProerties from '../../components/FeaturedProerties/FeaturedProerties'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/PropertyList/PropertyList'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className="home-title">Khám phá Việt Nam</h1>
        <PropertyList />
        <h1 className="home-title">Địa điểm yêu thích</h1>
        <FeaturedProerties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
