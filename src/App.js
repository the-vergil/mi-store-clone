import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PreNavbar from './Components/PreNavbar.js';
import Navbar from './Components/Navbar.js';
import Slider from './Components/Slider.js'
import Offers from './Components/Offers.js'
import data from './data/data.json'
import Heading from './Components/Heading.js'
import StarProduct from './Components/StarProduct.js'
import HotAccessoriesMenu from './Components/HotAccessoriesMenu.js'
import HotAccessories from './Components/HotAccessories.js'
import ProductReviews from './Components/ProductReviews.js'
import Videos from './Components/Videos.js'
import Banner from './Components/Banner.js'
import Footer from './Components/Footer.js'
import NavOptions from './Components/NavOptions.js'

const App = () => {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions mi={data.miPhones} redmi={data.redmiPhones} tv={data.tv} laptops={data.laptop} lifestyle={data.fitnessAndLifeStyle}
        home={data.home} audio={data.audio} accessories={data.accessories}/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>

      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>

      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} />
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>} />
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>} />
        <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>} />
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>} />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews reviews={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos video={data.videos} />

      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App