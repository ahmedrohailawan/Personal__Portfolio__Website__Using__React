import React from 'react'
import { Link } from "react-scroll";
import $ from 'jquery';
import './Navbar.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'


function Navbar() {
    useEffect(() =>{
      Aos.init({
        duration : 1000
      })
    },[])
    window.addEventListener('scroll', () => {
        if(window.scrollY > 20){
            $('.nav').addClass("nav-sticky");
            $('.nav-mobile').addClass("nav-mobile-sticky");
        }else{
            $('.nav').removeClass("nav-sticky");
            $('.nav-mobile').removeClass("nav-mobile-sticky");
        }
        if(window.scrollY > 500){
            $('.scroll-up-btn i').addClass("show");
        }else{
            $('.scroll-up-btn i').removeClass("show");
        }
      });

    const toggle = () =>{
        $('.nav').toggleClass("nav_active");
        $('.nav-mobile-btn span i').toggleClass("btn_active");
    }
    const navclose = () =>{
        $('.nav').toggleClass("nav_active");
        $('.nav-mobile-btn span i').toggleClass("btn_active");
    }

    const top = () =>{
        $('html').animate({scrollTop: 0})
    }
    return (
        <>
            <nav>
                <div className="nav">
                <Link to="Home" offset={-150} ><h2>Portfo<span>lio.</span></h2></Link>
                <ul>
                    <li><Link to="Home" activeClass='active' offset={-150} spy={true} onClick={navclose}><i className='fas fa-home' ></i>Home</Link></li>
                    <li><Link to="About" activeClass='active' offset={-100} spy={true} onClick={navclose}><i className='fas fa-user' ></i>About</Link></li>
                    <li><Link to="Services" activeClass='active' offset={-100} spy={true}  onClick={navclose}><i className='fas fa-cogs' ></i>Services</Link></li>
                    <li><Link to="Project" activeClass='active' offset={-100} spy={true}  onClick={navclose}><i className='fas fa-archive' ></i>Projects</Link></li>
                    <li><Link to="Contact" activeClass='active' offset={-100} spy={true}  onClick={navclose}><i className='fas fa-envelope' ></i>Contact</Link></li>
                </ul>
                </div>
                <div className="nav-mobile" >
                    <Link to="Home" offset={-150} ><h2>Portfo<span>lio.</span></h2></Link>
                    <div className="nav-mobile-btn" onClick={toggle}>
                    <span><i className='fas fa-bars'></i></span>
                    </div>
                </div>
            </nav>
            <div className='nav-space'></div>
            <div className="scroll-up-btn" onClick={top}>
                <i className="fas fa-angle-up" ></i>
            </div>
        </>
    )
}

export default Navbar
