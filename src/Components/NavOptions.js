import React from 'react'
import { useState, useEffect } from 'react'
import Navcard from '../Components/Navcard.js'
import '../Styles/NavOptions.css'

const NavOptions = ({mi, redmi, tv, laptops, lifestyle, home, audio, accessories}) => {
    const [miToggle, setmiToggle] = useState(false)
    const [redmiToggle, setredmiToggle] = useState(false)
    const [tvToggle, settvToggle] = useState(false)
    const [laptopsToggle, setlaptopsToggle] = useState(false)
    const [lifestyleToggle, setlifestyleToggle] = useState(false)
    const [homeToggle, sethomeToggle] = useState(false)
    const [audioToggle, setaudioToggle] = useState(false)
    const [accessoriesToggle, setaccessoriesToggle] = useState(false)

    useEffect(() => {
      if (window.location.pathname === "/mi") {
        return setmiToggle(true);
      }
      if (window.location.pathname === "/redmi") {
        return setredmiToggle(true);
      }
      if (window.location.pathname === "/tv") {
        return settvToggle(true);
      }
      if (window.location.pathname === "/laptops") {
        return setlaptopsToggle(true);
      }
      if (window.location.pathname === "/lifestyle") {
        return setlifestyleToggle(true);
      }
      if (window.location.pathname === "/home") {
        return sethomeToggle(true);
      }
      if (window.location.pathname === "/audio") {
        return setaudioToggle(true);
      }
      if (window.location.pathname === "/accessories") {
        return setaccessoriesToggle(true);
      }
    }, [])
    
  return (
    <div className='navOptions'>
        {miToggle ? mi.map((item, index) => (
            <Navcard key={item.image} name={item.name} price={item.price} image={item.image} />
        )) : null}
        {redmiToggle ? redmi.map((item, index) => (
            <Navcard key={item.image} name={item.name} price={item.price} image={item.image} />
        )) : null}
        {tvToggle ? tv.map((item, index) => (
            <Navcard key={item.image} name={item.name} price={item.price} image={item.image} />
        )) : null}
        {laptopsToggle ? laptops.map((item, index) => (
            <Navcard key={item.image} name={item.name} price={item.price} image={item.image} />
        )) : null}
        {lifestyleToggle ? lifestyle.map((item, index) => (
            <Navcard key={item.image} name={item.name} price={item.price} image={item.image} />
        )) : null}
        {homeToggle ? home.map((item, index) => (
            <Navcard key={item.image} name={item.name} price={item.price} image={item.image} />
        )) : null}
        {audioToggle ? audio.map((item, index) => (
            <Navcard key={item.image} name={item.name} price={item.price} image={item.image} />
        )) : null}
        {accessoriesToggle ? accessories.map((item, index) => (
            <Navcard key={item.image} name={item.name} price={item.price} image={item.image} />
        )) : null}
    </div>
  )
}

export default NavOptions