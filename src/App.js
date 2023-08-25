import React from 'react'
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

const App = () => {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="Star Section"/>
      <StarProduct starProduct={data.starProduct}/>
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} />
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>} />
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>} />
        <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>} />
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>} />
      </Routes>

    </Router>
  );
}

export default App