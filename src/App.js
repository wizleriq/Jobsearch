import './App.css';
import React from "react";
import { useEffect, useState } from 'react';
import posts from './data/hire';
import expertises from './data/expertiseData'
import works from './data/workData'
import profiles from './data/profileData'
import folders from "./data/folderData"
import testimonials from "./data/testimonialData"
import faqs from './data/faqData'
import Lady from '../src/images/Lady.png'
import Bell from '../src/images/Bell.png'
import Userfive from '../src/images/Userfive.png'
import Userten from '../src/images/Userten.png'
import Usernine from '../src/images/Usernine.png'
import Usereight from '../src/images/Usereight.png'
import Userseven from '../src/images/Userseven.png'
import Usersix from '../src/images/Usersix.png'
import Adduser from '../src/images/Adduser.png'
import Goggle from '../src/images/Goggle.png'
import Publicbank from '../src/images/Publicbank.png'
import Microsoft from '../src/images/Microsoft.png'
import Worldbank from '../src/images/Worldbank.png'
import Highlightone from '../src/images/Highlightone.png'
import Highlighttwo from '../src/images/Highlighttwo.png'
import Hire from '../src/images/Hire.png'
import Card from '../src/images/Card.png'
import Heart from '../src/images/Heart.png'
import Grouptwo from '../src/images/Grouptwo.png'
import People from '../src/images/People.png'
import Network from '../src/images/Network.png'
import Group from '../src/images/Group.png'
import Hands from '../src/images/Hands.png'
import Vector from '../src/images/Vector.png'
// import Circle from '../src/images/Circle.png'

// const ProfilesComponent = () => {
//   const itemsPerPage = 3;
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex + itemsPerPage < profiles.length) {
//       setCurrentIndex(currentIndex + itemsPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex - itemsPerPage >= 0) {
//       setCurrentIndex(currentIndex - itemsPerPage);
//     }
//   }

//   const visibleProfiles = profiles.slice(currentIndex, currentIndex + itemsPerPage);
const ProfilesComponent = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) { // Tailwind 'sm' breakpoint
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage(); // Call initially
    window.addEventListener('resize', updateItemsPerPage); // Listen for resize

    return () => window.removeEventListener('resize', updateItemsPerPage); // Cleanup
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < profiles.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleProfiles = profiles.slice(currentIndex, currentIndex + itemsPerPage);

  const toggle = () => {
    setIsOpen(!isOpen)
  }





  // function App() {
  return (
    <section className=" lg:bg-[#ffffff] lg:w-full lg:h-[8370px] lg:flex-col lg:items-center lg:justify-center 
    w-[430px] h-[8000px] bg-[#ffffff] flex-col justify-center items-center">


      <div className="lg:w-full lg:relative lg:h-[890px] lg:bg-[#F1F5F9] lg:flex lg:flex-col lg:items-center lg:justify-start 
      bg-[#F1F5F9]">

        {/* Navbar Starts  bg-[url('./images/background.png')] */}
        <div className="lg:w-[900px] lg:h-[68px] lg:left-[77px] lg:bg-[#FFFFFF] lg:flex lg:items-center lg:justify-around hidden">
          <div className="lg:w-[140.7px] lg:h-[45.5px] lg:left-[154px] lg-border-[0.46px] lg:bg-[#00B0F0] lg:flex lg:items-center 
      ">
            <h3 className="lg:w-[140.7px] lg:h-[45px]  lg:font-bold
        lg:text-[16px]  lg:capitalize lg:flex lg:items-center lg:justify-center lg:text-[#FFFFFF]">Urgent! hire jobs</h3>
          </div>
          <ul className="lg:w-[395px] lg:h-[22px] lg:top-[35px] lg:left-[591px] lg-gap-[24px] lg:flex lg:items-center lg:justify-between">
            <a href='/'><li className="lg:w-[61px] lg:h-[22px] lg:font-normal lg:text-[14px] lg:text-[#333333]">Home</li></a>
            <a href='#hire'><li className="lg:w-[105px] lg:h-[22px] lg:font-normal lg:text-[14px] lg:text-[#333333]">Our service</li></a>
            <a href='#faqs'><li className="lg:w-[50px] lg:h-[22px] lg:font-normal lg:text-[14px] lg:text-[#333333]">FAQs</li></a>
            <a href='#contact'><li className="lg:w-[107px] lg:h-[22px] lg:font-normal lg:text-[14px] lg:text-[#333333]">Contact us</li></a>

          </ul>
          <div className="lg:w-[118px] lg:h-[46.2px] lg:top-[22px] lg:left-[100px] lg:rounded-lg lg:border-[0.67px]
      lg:pt-[12.88px] lg:pr-[26.62px] lg:pb-[12.88px] lg:pl-[26.26px] lg:flex lg:items-center lg:justify-center lg:bg-[#00B0F0]">
            <h3 className="lg:w-[67px] lg:h-[22px] lg:font-[600] lg:text-[16px] lg:text-center lg:capitalize lg:flex lg:items-center lg:justify-center lg:lg:text-[#FFFFFF]">Find job</h3>

          </div>
        </div>

        <div className='lg:hidden block w-[430px] h-[60px] bg-[#ffffff] flex justify-between  items-center pl-6 pr-6'>
          <div className='w-[80px] h-[50px] flex justify-between  items-center'>
            <h3 className='text-[25px] font-medium text-[#00B0F0] ' >UHJ</h3>
          </div>

          {/* <div className='w-[20px] h-[20px]'>
        <img src={Vector} alt='vector' className='w-[20px] h-[20px]' onClick={toggle}/>
                <img src={Vector} alt='vector' className={`w-${isOpen ? '[40px]' : '[20px]'}
                 h-${isOpen ? '[40px]' : '[20px]' } transition-all duration-300`} onClick={toggle}/>
      </div> */}


          <div className=" w-[20px] h-[20px] justify-center items-center">
            {/* Toggle Image */}
            <img
              src={Vector}
              alt="vector"
              className='w-[20px] h-[20px] transition-all duration-300 cursor-pointer'
              // className={`w-${isOpen ? '40' : '20'} h-${isOpen ? '40' : '20'} transition-all duration-300 cursor-pointer`} 
              onClick={toggle}
            />

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-[59px] right-[0px] w-[415px] h-[250px] z-20 bg-white shadow-lg rounded p-2
         transition-all duration-300 opacity-400 scale-100 transform origin-top">
                <ul>
                  <a href='/'><li className="py-2 px-4 my-1 text-[16px] text-[#266075] font-normal bg-transparent cursor-pointer w-[430px] h-[40px] hover:bg-[#DCF4FD] hover:scale-105 transition-transform duration-300">
                    Home
                  </li></a>
                  <a href='#hire'><li className="py-2 px-4 my-1 text-[16px] text-[#266075] font-normal bg-transparent cursor-pointer w-[430px] h-[40px] hover:bg-[#DCF4FD] hover:scale-105 transition-transform duration-300">
                    Our Service
                  </li></a>
                  <a href='#faqs'><li className="py-2 px-4 my-1 text-[16px] text-[#266075] font-normal bg-transparent cursor-pointer w-[430px] h-[40px] hover:bg-[#DCF4FD] hover:scale-105 transition-transform duration-300">
                    FAQs
                  </li></a>
                  <a href='#contact'><li className="py-2 px-4 my-1 text-[16px] text-[#266075] font-normal bg-transparent cursor-pointer w-[430px] h-[40px] hover:bg-[#DCF4FD] hover:scale-105 transition-transform duration-300">
                    Contact Us
                  </li></a>
                </ul>
              </div>
            )}
          </div>




        </div>
        {/* Navbar Ends */}


        <div className="lg:w-[157px] lg:h-[30.5px] lg:top-[140px] lg:left-[657px] lg:rounded-md lg:border-[0.66px]
      lg:gap-[5.27px] lg:mt-10 lg:p-0 lg:flex lg:items-center lg:justify-center lg:bg-[#EDE6E6] w-[140px] h-[20.1px] border-[0.32px]
      rounded-md p-[2.59px] bg-[#EDE6E694] mt-5 mx-auto flex items-center justify-center lg:mx-0">
          <h3 className="lg:w-[141px] lg:h[20px] lg:font-normal lg:text-[13.19px] lg:capitalize  lg:flex lg:items-center lg:justify-center 
        lg:text-[#00B0F0] font-noraml text-[14px] leading-[100%] text-[#00B0F0] text-capitalize">
            Best hiring company
          </h3>
        </div>


        <div className="lg:w-[968px] lg:mt-4 lg:h-[242px] lg:top-[183px] lg:left-[236px] lg:gap-[16px] lg:bg-transparent 
      lg:flex-col w-[400px] h-[83.70px] bg-transparent flex flex-col mx-auto lg:mx-0 mt-4 items-center justify-between ">
          <div className="lg:w-[968px] lg:h-[182px] lg:bg-transparent w-[344px] h-[46px] bg-transparent">
            <h3 className="lg:w-[968px] lg:h-[136px] lg:left-[-20px] lg:font-semibold lg:text-[56px] 
       lg:text-center lg:capitalize font-semibold text-[19.15px]  text-center text-capitalize">
              Empowering businesses, elevating <span className="lg:text-[#00B0F0] text-[#00B0F0] ">careers</span>, Building futures.
            </h3>

          </div>
          <div className="lg:block hidden lg:w-[776px] lg:h-[44px] lg:bg-transparent lg:mt-4 lg:mx-auto lg:flex lg:items-center lg:justify-center
          w-[265.34px] h-[14px] mt-4 mx-auto flex tems-center justify-center">
            <h3 className="lg:flex lg:items-center lg:justify-center lg:text-[#647378] lg:font-normal lg:text-[16px]
          lg:text-center ">


              We help businesses find the right talent and job seekers secure great opportunities.
              Whether you are hiring or looking for a job, we make the process smooth and efficient.
            </h3>
          </div>
          <div className="block lg:hidden w-[300.34px] h-[14px] lg:mt-4   mx-auto flex items-center justify-center">
            <h3 className="lg:flex lg:items-center lg:justify-center lg:text-[#647378] lg:font-normal lg:text-[16px]
          lg:text-center ">
              We help businesses find the right talent.
            </h3>
          </div>
        </div>

        <div className="relative lg:w-[350px] lg:h-[60px] lg:mt-5 lg:flex lg:items-center lg:justify-center mt-6 flex 
        justify-center items-center w-[280px] h-[33.06px] lg:bg-transparent bg-green-200 mx-auto ">
          <input
            type="text"
            placeholder="Search option"
            className="lg:w-[350px] lg:h-[40px] lg:mt-5 lg:top-[475px] lg:left-[451px] 
              lg:rounded-md lg:pl-[16px] lg:gap-[18px] lg:bg-[#ffffff]  w-[350px] h-[33.0px] rounded-md pl-[7.45px] outline-none"
          />
          <div className="lg:w-[118px]  lg:top-[23.5px] lg:left-[230px] lg:absolute lg:h-[33.2px]  lg:rounded-lg lg:border-[0.67px]
      lg:pt-[12.88px] lg:pr-[24.62px] lg:pb-[12.88px] lg:pl-[24.26px] lg:flex lg:items-center lg:justify-center lg:bg-[#00B0F0]
      w-[84px] h-[21.5px] absolute left-[195px] rounded-md pt-[0.31px] pr-[12.4px] pl-[12.4px] pb-[0.31px] bg-[#00B0F0] flex items-center justify-center">
            <h3 className="lg:w-[67px] lg:h-[22px] lg:font-[600] lg:text-[16px] lg:text-center lg:capitalize lg:flex lg:items-center lg:justify-center lg:lg:text-[#FFFFFF]
            font-medium text-[12px] leading-[100%] capitalize text-[#ffffff]" >Find job</h3>
          </div>
        </div>

        {/* <div className="relative lg:w-[1200px] mt-3 "> */}
        {/* <img src={Lady} alt="Logo"  className="lg:w-[1000px] lg:absolute lg:h-[645px] lg:top-[20px] lg:rounded-sm"/> */}
        <div className="relative lg:w-[1200px] lg:mt-3 lg:flex lg:items-center lg:justify-center mt-8 w-[430px] 
        h-[163px] rounded-md block items-center justify-center  lg:pt-0 lg:pr-0 lg:pb-0 lg:pl-0 pl-4 pr-4 ">
          <img src={Lady} alt="Logo" className="lg:w-[1150px] lg:absolute lg:h-[545px] lg:top-[20px] lg:rounded-sm
         " />

          <div className="lg:w-[270px] lg:h-[48.5px] lg:top-[62px] lg:absolute  lg:left-[70px] lg:border lg:rounded-lg lg:pt-[12px]
      lg:pr-[18px] lg:pb-[12px] lg:pl-[18px] lg:gap-[10px] lg:bg-[#ffffff] lg:flex lg:items-center 
      w-[86px] h-[19.9px] rounded-md pt-[3.89px] pr-[5.83px] pb-[3.89px] pl-[5.83px] absolute bg-[#ffffff]
       top-[20px] left-[30px] flex items-center sm:justify-center">
            <img src={Bell} alt="Bell" className="lg:w-[52px] lg:h-[37.5px] w-[16.83px] h-[12.2px]" />
            <div className="lg:w-[183px] lg:h-[21px] w-[59px] h-[7px]" >
              <h3 className="lg:font-normal lg:text-[17px] lg:leading-[100%] tracking-[0%] lg:text-center lg:text-[#0C3F52]
              font-normal text-[5.51px] leading-[100%] text-center capitalize">Job Alert subcribed</h3>
            </div>
          </div>
          <div className="lg:bg-[#FFFFFF] lg:w-[350px] lg:h-[115.4px] lg:absolute lg:top-[310px] lg:left-[760px] lg:border lg:rounded-lg
      lg:pt-[16px] lg:pr-[20px] lg:pb-[16px] lg:pl-[20px] lg:flex-col lg:justify-center w-[119px] h-[36.7px] rounded-md
      pt-[6.45px] pr-[10.32px] pb-[5.16px] pl-[10.32px] absolute bg-[#ffffff] left-[280px] top-[153px] flex flex-col items-center ">
            <div className="lg:w-[305px] lg:h-[20px] lg:bg-transparent lg:flex lg:items-center lg:justify-center mb-[3px] w-[98px] h-[6px] flex items-center justify-center">


              <h3 className="lg:flex lg:items-center lg:justify-center lg:font-normal lg:text-[16.35px] lg:leading-[100%] lg:mb-0 lg:text-center font-normal text-[5.27px] leading-[100%]
              text-center">4k+ Candidates get job</h3>
            </div>
            <div className="lg:w-[305px] lg:h-[50.4px] lg:relative lg:bg-transparent lg:mt-3 lg:flex lg:items-center lg:justify-center w-[98.3px] h-[16.2px] flex
             items-center justify-center bg-transparent">
              {/* width: 98.36044311523438;
height: 16.25552749633789; */}

              <img src={Userfive} alt="User" className="lg:absolute lg:left-[0px] lg:w-[50.4px] lg:h-[50.4px] absolute left-[10px] w-[16.25px]
              h-[16.22px] " />
              <img src={Userten} alt="User" className="lg:absolute lg:left-[42px] lg:w-[50.4px] lg:h-[50.4px] absolute left-[23px] w-[16.25px]
              h-[16.22px]  " />
              <img src={Usernine} alt="User" className="lg:absolute lg:left-[84px] lg:w-[50.4px] lg:h-[50.4px] absolute  left-[35px] w-[16.25px]
              h-[16.22px] " />
              <img src={Usereight} alt="User" className="lg:absolute lg:left-[125px] lg:w-[50.4px] lg:h-[50.4px] absolute right-[54px] w-[16.25px]
              h-[16.22px] " />
              <img src={Userseven} alt="User" className="lg:absolute lg:left-[165px] lg:w-[50.4px] lg:h-[50.4px] absolute left-[62px] w-[16.25px]
              h-[16.22px] " />
              <img src={Usersix} alt="User" className="lg:absolute lg:left-[206px] lg:w-[50.4px] lg:h-[50.4px] absolute left-[75px] w-[16.25px]
              h-[16.22px] " />
              <img src={Adduser} alt="User" className="lg:absolute lg:left-[247px] lg:w-[50.4px] lg:h-[50.4px] absolute left-[87px] w-[16.25px]
              h-[16.22px] " />
            </div>

          </div>


        </div>
      </div>
      <div className="lg:w-[830.2px] lg:mt-[190px] lg:h-[44.2px] lg:bg-transparent 
      lg:flex lg:items-center lg:justify-center lg:mx-auto w-[390px] h-[13.4px] bg-transparent  mx-auto flex items-center justify-between
      mt-[50px]">
        <img src={Goggle} alt="" className="lg:w-[140.9px] lg:h-[40.3px] w-[45.7px] h-[13.42px] " />
        <img src={Publicbank} alt="" className="lg:w-[140.9px] lg:h-[40.3px] w-[45.7px] h-[13.42px] " />
        <img src={Microsoft} alt="" className="lg:w-[140.9px] lg:h-[40.3px] w-[45.7px] h-[13.42px] " />
        <img src={Microsoft} alt="" className="lg:w-[140.9px] lg:h-[40.3px] w-[45.7px] h-[13.42px] " />
        <img src={Microsoft} alt="" className="lg:w-[140.9px] lg:h-[40.3px] w-[45.7px] h-[13.42px] " />
        <img src={Worldbank} alt="" className="lg:w-[140.9px] lg:h-[40.3px] w-[45.7px] h-[13.42px] " />
      </div>
      {/* Streamline Section Starts  */}
      <div className='lg:w-full lg:h-[275px] lg:top-[1329px] lg:bg-transparent lg:mx-auto lg:mt-0 lg:mb-32 lg:flex lg:items-center lg:justify-center 
      w-[390px] h-[90.3px] bg:transparent flex items-center justify-center mx-auto mt-6  '>
        <div className='lg:w-[766px] lg:h-[156px] lg:top-[60px] lg:left-[317px] lg:bg-transparent lg:flex lg:items-center lg:justify-center
        w-[330px] h-[70px]  top-[0px] flex justify-center text-center bg:transparent'>
          <img src={Highlightone} alt="Highlight" className="lg:absolute lg:w-[40px] lg:h-[43.82px] lg:top-[1180px] lg:left-[990px] lg:right-[240px] absolute w-[15.77px]
          h-[17.27px] top-[540px] left-[395px] " />
          <img src={Highlighttwo} alt="Hightlight" className="lg:absolute lg:w-[40px] lg:h-[43.82px] lg:top-[1180px] lg:left-[240px] absolute 
          h-[17.27px] top-[540px] left-[20px] " />
          <h3 className="lg:w-[677px] lg:h-[117px] lg:top-[99px] lg:left-[357px] lg:font-semibold lg:text-[32px]
   lg:leading-[100%] lg:space-[-4px] lg:text-center lg:flex lg:items-center lg:justify-center lg:capitalize lg:text-[#266075]
   text-[#266075] font-semibold text-[15.39px]  text-center">
            Streamlining hiring by connecting top talent with the right opportunities for both clients and candidates.</h3>
        </div>
      </div>
      {/* Streamline Section Ends */}

      {/* About Me Section Starts */}
      <section id="about" className="lg:w-full lg:bg-transparent lg:h-[1330px] lg:mb-0 lg:top-[1634px] lg:mt-3 lg:bg-transaprent lg:flex-col lg:mx-auto lg:justify-center
       w-[430px] h-[1250px] bg-transparent mb-0">
        <div className='lg:w-[50px] lg:h-[2px] lg:flex  lg:bg-transparent lg:mx-auto lg:mb-4 lg:mt-[-120px]  bg-transparent w-[50px] h-[2px]
        flex  mx-auto ' >
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1] lg:flex lg:flex-col lg:mx-auto lg:mt-4
          w-[19px] h-[2px] bg-[#01B0F1] flex flex-col mx-auto mt-4'>
          </div>
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1]  lg:flex lg:flex-col lg:mx-auto lg:mt-4
          w-[19px] h-[2px] bg-[#01B0F1] flex flex-col mx-auto mt-4'>
          </div>
        </div>

        <div className="lg:w-[762px] lg:h-[90px] lg:top-[123px] lg:left-[339px] lg:flex-col lg:mx-auto lg:bg-transparent lg:justify-center
        lg:mt-8 w-[390px] h-[63.19px] mt-8 flex flex-col mx-auto bg-transparent justify-center items-center text-center lg:mb-0 mb-8">

          <div className="lg:w-[168px] lg:h-[39px] lg:top-[68px] lg:left-[636px] lg:bg-transparent lg:flex lg:items-center lg:justify-center 
          lg:mx-auto lg:mb-0 w-[160px] h-[30px] mb-1 bg-transparent  flex items-center justify-center">
            <h3 className="lg:font-medium lg:text-[32px] lg:leading-[100%] lg:space-[0%] lg:text-center lg:capitalize lg:text-[#00B0F0]
             font-medium text-[15.39px] leading-[100%] text-center capitalize text-[#00B0F0]">About Us</h3>
          </div>
          <div className="lg:w-[762px] lg:lg:bg-transparent lg:mt-3 lg:h-[48px] lg:top-[123px] lg:left-[339px]">
            <h3 className="lg:w-[762px] lg:h-[48px] lg:top-[123px] lg:left-[339px] lg:font-normal lg:text-[20px] lg:leading-[100%]
  lg:space-[0%] lg:text-center lg:text-[#266075] font-normal text-[13px] text-center text-[#266075]">We help businesses find top talent and job seekers land their dream roles. Where talent meet opportunities.</h3>


          </div>
        </div>

        <div className="lg:w-full  lg:h-[1000px] lg:bg-transparent lg:mb-0  lg:mt-9 lg:flex lg:mx-auto lg:justify-around lg:items-center 
        w-[390px] h-[1070px] rounded-md flex lg:flex-row flex-col bg-transparent mt-10 mb-40 mx-auto ">

          <div className="lg:w-[560px] lg:h-[1000px]  lg:left-[89px] lg:bg-transparent w-[390px] h-[460.02px] lg:rounded-none rounded-lg
           bg-[#EFEFEF]  lg:mb-0 mb-10 flex flex-col">
            <div className="lg:w-[560px] lg:h-[600px] lg:top-[252px] lg:left-[89px] lg:rounded-xl lg:bg-[#EFEFEF] 
            w-[390px] h-[450.02px] rounded-lg bg-transparent ">
              <div className="lg:w-[560px] lg:h-[510px] lg:pt-[15px] lg:pr-[15px] lg:pl-[15px] lg:rounded-xl lg:bg-[#EFEFEF]
              w-[390px] h-[400.22px] pt[8.14px] pr-[5px] pl-[5px] flex flex-col bg-[#EFEFEF]">

                <div className="lg:w-[530px] lg:h-[398px] lg:rounded-xl lg-border-[1px] lg:bg-[#ffffff] lg:flex lg:items-center lg:justify-center
                w-[380px] h-[340px] rounded-xl bg-[#ffffff] flex items-center justify-center">
                  <div className="lg:w-[489px] lg:h-[99.4px] lg-[148.85px] lg:left-[23px] lg:bg-transparent lg:flex lg:items-center lg:justify-center
                  flex items-center justify-center">
                    <img src={Hire} alt="" />
                  </div>
                </div>

                <h3 className="lg:w-[530px] lg:h-[110px] lg:mt-2 lg:font-normal lg:text-[18px] lg:leading-[100%] 
                lg:text-[#266075] lg:text-left w-[390px] h-[110px] text-left font-normal text-[13.3px] text-[#266075] mt-3
                 ">
                  At Urgent! Hire Jobs, LLC, we are more than a staffing agency we are a strategic partner in talent acquisition.
                  Our expertise in executive search and recruitment ensures that
                  businesses secure the best professionals, while job seekers gain access to premier career opportunities.
                </h3>
              </div>
              <div className="lg:w-[158px] lg:h-[46.2px] lg:ml-3 lg:mt-6 lg:rounded-md lg:gap-[8.59px] lg:pt-[12.88px] lg:pr-[26.62px] lg:pb-[12.88px]
   lg:pl-[26.62px] lg:bg-[#00B0F0] lg:flex lg:items-center lg:justify-center flex items-center mt-4 
   w-[100.77px] h-[25.0px] rounded-md pt-[6.99px] pr-[14.45px] pb-[6.99px] pl-[14.45px] bg-[#00B0F0] ml-1 justify-center">
                <h3 className="lg:w-[120px] lg:h-[22px] lg:font-medium lg:text-[18px] lg:leading-[100%] lg:space-[0px] lg:text-center
 lg:capitalize lg:text-[#FFFFFF] text-[#ffffff] font-medium text-[12px] leading-[100%] text-center capitalize">Learn more</h3>


              </div>
            </div>
            <div className="lg:w-[560px] lg:block hidden lg:h-[301px] lg:top-[959px] lg:mt-8 lg:left-[89px] lg:rounded-xl lg:bg-transparent mt-14">
              <img src={Card} alt="" />

            </div>
          </div>

          {/* <div className="lg:w-[490px] lg:h-[958px] lg:top-[252px] lg:left-[89px] lg:flex-col lg:bg-transaprent 
          w-[390px] h-[1400px] bg-transparent flex flex-col lg:mb-0  mb-10">
            <div className="lg:w-[490px] lg:h-[556px] lg:top-[22px lg:left-[89px] lg:flex-col lg:bg-transaprent
            w-[390px] h-[270px] flex flex-col bg-transparent "> */}
          <div className="lg:w-[490px] lg:h-[958px] lg:top-[252px] lg:left-[89px] lg:flex-col lg:bg-transparent
          w-[390px] h-[590px] bg-transparent flex flex-col lg:mb-0  mb-10">
            {/* <div className="lg:w-[490px] lg:h-[556px] lg:top-[22px lg:left-[89px] lg:flex-col lg:bg-transaprent
            w-[390px] h-[270px] flex flex-col bg-red-300 "> */}


            <div className="lg:w-[490px] lg:h-[115px] lg:top-[289px] lg:left-[767px] lg:gap-[16px] lg:bg-transaprent lg:mt-6
              lg:mb-0 mb-8 w-[390px] h-[40.4px] bg-transparent">

              <div className="lg:w-[490px] lg:h-[68px] lg:bg-transparent w-[390px] h-[40px] ">
                <h3 className="lg:font-medium lg:text-[28px] lg:leading-[100%] lg:space-[0%] lg:text-[#266075]
                  font-medium text-[16.51px] text-center  text-[#266075] ">Community & Corporate Social Responsibility</h3>
              </div>

              <div className="lg:w-[490px] lg:h-[44px] lg:bg-transparent lg:mt-0 mt-[-10px] w-[390px] h-[90px]">
                <h3 className="lg:font-normal lg:text-[18px]  lg:space-[-2%] lg:text-[#266075] 
                   font-light text-[12px] text-center  text-[#266075] "> We are dedicated to making a positive impact beyond recruitment. Our CSR initiatives include:</h3>

              </div>
            </div>

            <div className='lg:w-[490px] lg:h-[309px] lg:top-[478px] lg:mt-8 lg:left-[767px] lg:gap-[24px] lg:bg-transparent
  lg:flex-col lg:justify-evenly bg- w-[390px] h-[200px] bg-transparent flex flex-col items-center justify-center mt-0'>

              <div className="lg:w-[489px] lg:h-[70px] lg:mb-4 lg:rounded-lg lg:bg-[#DCF4FD] lg:flex lg:items-center
                 lg:justify-evenly w-[390px] h-[55.15px] flex items-center lg:pl-0 pl-2 rounded-lg mb-2 bg-[#DCF4FD] ">
                <div className="lg:w-[57px] lg:h-[42px] lg:top-[26px] lg:left-[18px] lg:rounded-md lg:bg-transparent lg:mr-0 mr-2">
                  <img src={Heart} alt="" className="lg:w-[57px] lg:h-[42px]" />
                </div>
                <div className="lg:w-[378px] lg:h-[24px] lg:top-[32px] lg:left-[84px] lg:rounded-md lg:bg-transparent">
                  <h3 className="lg:font-normal lg:text-[20px] lg:leading-[100%] lg:space-[-2%] lg:capitalize lg:bg-transparent
                    text-[16.51px] text-[#266075] capitalize bg-transparent">Supporting Local Charities.</h3>
                </div>

              </div>

              <div className="lg:w-[489px] lg:h-[70px] mb-2 lg:mb-4 lg:rounded-lg lg:bg-[#DCF4FD] lg:flex lg:items-center lg:justify-evenly
                w-[390px] h-[55.15px] flex items-center lg:pl-0 pl-2 rounded-lg bg-[#DCF4FD]">

                <div className="lg:w-[57px] lg:h-[42px] lg:top-[26px] lg:left-[18px] lg:rounded-md lg:bg-transparent lg:mr-0 mr-2">
                  <img src={Grouptwo} alt="" className="lg:w-[57px] lg:h-[42px]" />
                </div>
                <div className="lg:w-[378px] lg:h-[24px] lg:top-[32px] lg:left-[84px] lg:rounded-md lg:bg-transparent">
                  <h3 className="lg:font-normal lg:text-[20px] lg:leading-[100%] lg:space-[-2%] lg:capitalize lg:bg-transparent
                    text-[16.51px] text-[#266075] capitalize bg-transparent">Mentorship Programs.</h3>
                </div>

              </div>

              <div className="lg:w-[489px] lg:h-[70px] mb-2 lg:rounded-lg lg:bg-[#DCF4FD] lg:flex lg:items-center lg:justify-evenly 
                w-[390px] h-[55.15px] flex items-center lg:pl-0 pl-2 rounded-lg bg-[#DCF4FD]">
                <div className="lg:w-[57px] lg:h-[42px] lg:top-[26px] lg:left-[18px] lg:rounded-md lg:bg-transparent lg:mr-0 mr-2">
                  <img src={People} alt="" className="lg:w-[57px] lg:h-[42px]" />
                </div>
                <div className="lg:w-[378px] lg:h-[24px] lg:top-[32px] lg:left-[84px] lg:rounded-md lg:bg-transparent">
                  <h3 className="lg:font-normal lg:text-[20px] lg:leading-[100%] lg:space-[-2%] lg:capitalize lg:bg-transparent
                    text-[16.51px] text-[#266075] capitalize bg-transparent">Sustainable Hiring Practices.</h3>
                </div>

              </div>

            </div>

            <div className="block lg:hidden lg:bg-green-500 mt-4 w-[390px] h-[280px] rounded-lg bg-transparent">
              <img src={Card} alt="" className=' lg:w-[560px] lg:h-[301px] w-[390px] h-[210px]' />
            </div>

            {/* </div> */}
            {/* 
            <div className="lg:w-[490px] lg:h-[250px] lg:top-[983px] lg:left-[769px] lg:mt-[59px] lg:gap-[39px] lg:bg-transparent mt-[210px]
            w-[390px] h-[97.7px] bg-transparent"> */}

            <div className="lg:w-[490px] lg:h-[250px] lg:top-[983px] lg:left-[769px] lg:mt-[59px] lg:gap-[39px] lg:bg-transparent mt-[0px]
            w-[390px] h-[97.7px] bg-transparent">
              <div className="lg:w-[490px] lg:h-[133px] lg:gap-[16px] lg:bg-transparent  lg:mt-0 mt-4 w-[390px] h-[70px] bg-transparent">
                <h3 className="lg:font-normal lg:text-[28px] lg:leading-[100%] lg:space-[0%] lg:text-[#266075] font-medium text-[16.51px] text-left
                lg:text-left text-[#266075]">Empowering businesses, connecting talent</h3>
                <h3 className="lg:font-light lg:text-[18px] lg:text-left lg:mt-4 lg:space-[-2%] 
               text-[11px] text-[#266075] text-left  font-light ">We bridge the gap between exceptional talent and thriving companies,
                  ensuring the perfect match for growth and success.
                </h3>
              </div>


              <button className="lg:w-[158px] lg:h-[46.2px] lg:mt-6 lg:gap-[8.59px] lg:lg:rounded-lg lg:pt-[12.88px] lg:pr-[26.62px] lg:pb-[12.88px] lg:pl-[26.62px]
 lg:bg-[#00B0F0] lg:flex lg:items-center lg:justify-center w-[80.8px] h-[24.5px] rounded-lg pt-[6.84px] pr-[14.13px] 
 pb-[6.84px] pl-[14.13px] bg-[#00B0F0] flex items-center justify-center mt-[-12px]">
                <h3 className="lg:font-medium lg:text-[18px] lg:leading-[100%] lg:space-[0%] lg:text-center lg:capitalize lg:text-[#FFFFFF]
                font-medium text-[9.56px] leading-[100%] text-center capitalize text-[#ffffff]">About us</h3>
              </button>
            </div>
          </div>
        </div>

        <main className='w-[1160px] h-[180px] lg:mt-[-20px] lg:block hidden lg:bg-transparent lg:flex lg-flex-col lg:justify-between lg:mx-auto'>
          <div className='lg:w-[411px] lg:h-[165px] bg-transparent'>
            <div className='lg:w-[411px] lg:h-[39px] bg-transparent flex items-center'>
              <h3 className='lg:font-medium text-[32px] capitalize lg:text-[#00B0F0]' >Our Vision Statement</h3>
            </div>
            <div className='lg:w-[411px] h-[115px] bg-transparent'>
              <h3 className='lg:font-normal lg:text-[17px] lg:text-[#266075]'>To be the world’s most trusted executive search partner—connecting organizations with exceptional talent that inspires innovation, drives success, and transforms industries globally.
              </h3>

            </div>

          </div>

           <div className='lg:w-[525px] lg:h-[165px] bg-transparent'>
            <div className='lg:w-[525px] lg:h-[39px] bg-transparent flex items-center'>
              <h3 className='lg:font-medium text-[32px] capitalize lg:text-[#00B0F0]' >Our Mission 
</h3>
            </div>
            <div className='lg:w-[525px] h-[127px] bg-transparent'>
              <h3 className='lg:font-normal lg:text-[17px] lg:text-[#266075]'>
                At Urgent! Hire Jobs, LLC, our mission is to relentlessly seek, attract, and place top-tier professionals who empower companies to thrive. We are committed to delivering personalized, high-impact recruitment solutions with speed, precision, and integrity—bridging global talent with opportunity.
              </h3>

            </div>

          </div>

        </main>
      </section>
      {/* About Me Section Ends */}

      {/* Hire Section Starts  lg:h-[836px]  lg:bg-[#FAFAFA] */}
      {/* <section id='hire' className="lg:w-full lg:h-[780px] lg:top-[3024px] lg:bg-[#FAFAFA] lg:mx-auto lg:flex lg:flex-col 
lg:justify-center lg:mt-12 lg:mb-0 mb-4 mt-6 w-[390px] h-[760px] bg-green-400 flex flex-col mx-auto"> */}
  <section id='hire' className="lg:w-full lg:h-[780px] lg:top-[3024px] lg:bg-[#FAFAFA] lg:mx-auto lg:flex lg:flex-col 
lg:justify-center lg:mt-12 lg:mb-0 mb-4 mt-6 w-[390px] h-[720px] bg-transparent flex flex-col mx-auto">

        <div className='lg:w-[50px] lg:h-[2px] lg:flex  lg:mx-auto lg:mb-4 lg:mt-[-120px] ' >
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1] lg:flex lg:flex-col lg:mx-auto lg:mt-4'>
          </div>
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1]  lg:flex lg:flex-col lg:mx-auto lg:mt-4'>
          </div>
        </div>


        <div className="lg:w-[840px] lg:h-[64px] lg:bg-transparent lg:mt-[20px] lg:left-[300px] lg:gap-[8px] lg:mx-auto lg:flex-col lg:items-center 
lg:justify-center w-[390px] h-[35.9px] bg-transparent flex flex-col items-center mx-auto">
          <h3 className="lg:font-semibold lg:text-[32px] lg:leading-[100%] lg:text-center lg:text-[#1BB8F2] 
          font-medium text-[15.39px] leading-[100%] text-center text-[#1BB8F2]">Why Urgent! hire jobs? We are glad you asked</h3>
          <h3 className="lg:font-normal lg:text-[20px] lg:mt-2 lg:leading-[100%] lg:text-center lg:text-[#266075] 
          font-normal text-[12px] text-center mt-1 text-[#266075]">We help unlock opportunities for employers and job seekers.
          </h3>
        </div>

        <div className="lg:w-[996.4px] lg:h-[490px] lg:top-[297px] lg:left-[222px] lg:flex-col lg:mx-auto lg:mt-[70px] lg:gap-[24.76px]
         lg:bg-transparent w-[390px] h-[317px] bg-transparent flex flex-col items-center justify-between mt-5">
          <div className="lg:w-[996.4px] lg:h-[210px] lg:gap-[24.76px] lg:bg-transparent lg:flex">
            {/* {posts.map((post)  lg:h-[491px]=>{ */}
            {posts.filter(post => post.id === 1 || post.id === 2).map((post) => {
              return (
                <div
                  key={post.id}
                  className="lg:w-[488.9px] lg:h-[210px] lg:gap-[8.25px] lg:rounded-lg lg:pt-[10.32px] lg:pl-[20.63px] lg:bg-[#DCF4FD]
                  bg-[#DCF4FD] mb-5 w-[390px] h-[148px] rounded-lg pt-[6.39px] pl-[12.78px]">
                  <img src={post.picture} alt={post.heading} className='lg:w-[50px] lg:h-[43.3px] lg:top-[31.98px]
          lg:left-[31.98px] w-[50px] h-[50px]'/>
                  <h3 className="lg:w-[468.3px] lg:h-[104.25px] lg:gap-[8.25px] lg:font-normal lg:text-[22px] lg:leading-[100%]
      lg:space-[-2%] lg:capitalize lg:text-[#266075] lg:mt-2 lg:mb-0 mb-2 font-normal mt-2 text-[#266075]  text-[15.39px] leading-[100%] capitalize">{post.heading}</h3>

                  <p className='lg:mt-[-70px]  lg:text-[18.57px] lg:font-light text-[13.51px] text-[#266075] '>{post.text}</p>
                </div>

              )
            })}

          </div>


          <div className="lg:w-[996.4px] lg:h-[210.1px] lg:gap-[24.76px] lg:flex lg:flex-row lg:justify-start lg:mt-7 lg:bg-transparent 
          bg-transparent w-[390px] h-[317px]  flex flex-col items-center justify-between mt-0">
            {/* w-[390px] h-[317px] bg-yellow-200  flex flex-col items-center justify-between mt-5"> */}
            {posts.filter(post => post.id === 3 || post.id === 4).map((post) => {
              return (
                <div
                  key={post.id}
                  // className="lg:w-[488.9px] lg:h-[233.1px] 
                  className="lg:w-[488.9px] lg:h-[210px] lg:gap-[8.25px] lg:rounded-lg lg:pt-[10.32px] lg:pl-[20.63px] lg:bg-[#DCF4FD] 
                  bg-[#DCF4FD] mb-5 w-[390px] h-[148px] rounded-lg pt-[6.39px] pl-[12.78px]">
                  <img src={post.picture} alt={post.heading} className='lg:w-[50px] lg:h-[43.3px] lg:top-[31.98px]
          lg:left-[31.98px] w-[50px] h-[50px]'/>
                  <h3 className="lg:w-[468.3px] lg:h-[104.25px] lg:gap-[8.25px] lg:font-normal lg:text-[22px] lg:leading-[100%]
      lg:space-[-2%] lg:capitalize lg:text-[#266075] lg:mt-2 mb-2 font-normal mt-2 text-[#266075]  text-[15.39px] leading-[100%] capitalize">{post.heading}</h3>
                  <p className='lg:mt-[-70px]  lg:text-[18.57px] lg:font-light text-[13.51px] text-[#266075] '>{post.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* Hire Section Ends*/}

      {/* Expertise Section Starts */}
      <section className="lg:w-full lg:h-[660px] lg:bg-[#FFFFFF] lg:flex lg:flex-col 
lg:justify-center lg:mb-0 mb-6 bg-transparent w-[390px] h-[670px] mx-auto lg:mt-0 mt-5">
        <div className="lg:w-[400px] lg:h-[60px] lg:mt-[-100px] lg:bg-transparent lg:mb-0 lg:flex lg:flex-col  lg:items-center lg:mx-auto lg:justify-center 
        lg:gap-[16px] w-[390px] h-[35.04px] mb-8 flex flex-col justify-center items-center bg-transparent">
          {/* <div className="lg:w-[400px] lg:min-h-[70px] lg:mt-10 lg:flex lg:flex-col lg:items-center lg:mx-auto lg:justify-center lg:gap-2 lg:bg-green-500"> */}

          <div className='lg:w-[400px] lg:h-[39px] lg:flex lg:justify-center lg:items-center flex items-center justify-center
          w-[370px] h-[17px]'>
            <h3 className="lg:font-medium lg:text-[32px] lg:leading-[100%] lg:text-center lg:text-[#212121]
            font-medium text-[15.39px] leading-[100%] text-center text-[#212121]">
              Our Expertise
            </h3>
          </div>
          <h3 className='lg:flex lg:items-center lg:justify-center  lg:text-[14.1px] lg:mt-[-10px] lg:capitalize lg:text-[#212121]
          font-normal text-[12px] leading-[100%] text-center mt-1 text-[#212121]'>Strategic talent sourcing</h3>
        </div>
        <div className='lg:w-[1000px] lg:h-[393px]  lg:rounded-lg lg:bg-transparent lg:flex lg:items-center
  lg:justify-between lg:mx-auto lg:mt-16'>
          <div className='lg:w-[489px] lg:h-[393px] lg:top-[4192px] lg:left-[100px] lg:flex lg:justify-center lg:items-center lg:rounded-lg lg:bg-transparent 
          w-[390px] h-[280px] rounded-lg bg-transparent'>
            <img src={Network} alt='Networking' className='lg:flex lg:justify-center lg:items-center flex items-center justify-center' />
          </div>

          <div className='lg:w-[489px] lg:h-[393px] lg:top-[4192px] lg:justify-center lg:flex-col lg:items-center lg:rounded-lg lg:bg-transparent
          bg-transparent mt-5 w-[390px] h-[260px] '>
            {expertises.map((expertise) => {
              return (
                <div
                  key={expertise.id}
                  className='lg:w-[489px] lg:h-[87px] lg:bg-[#DCF4FD] lg:font-normal lg:text-[20px] lg-leading-[100%] lg:capitalize lg:rounded-lg lg:mb-3
                   lg:flex lg:items-center lg:px-4 w-[390px] h-[55.15px] flex items-center lg:pl-0 pl-1 rounded-lg bg-[#DCF4FD] mb-3 ">' >

                  <img
                    src={expertise.picture}
                    alt=''
                    className='lg:w-[57px] lg:h-[42px] w-[50px] h-[40px] mr-4'
                  />
                  <h3 className='text-lg font-normal lg:text-[#266075] text-[#266075] lg:font-normal lg:text-[20px] 
                  lg:leading-[100%] lg:capitalize font-nromal text-[13.51px] leading-[100%] capitalize'>{expertise.text}</h3>
                </div>

              )
            })}
          </div>
        </div>

      </section>
      {/* Expertise Section Ends */}

      {/* Work Section Ends */}
      <section className='lg:w-full lg:h-[900px] lg:bg-[#FAFAFA] lg:flex lg:flex-col lg:mx-auto mb-8 bg-transparent w-[390px] h-[1190px]
      flex flex-col items-center mx-auto '>
        <div className='lg:w-[50px] lg:h-[2px] lg:flex  lg:mx-auto lg:mb-4 ' >
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1] lg:flex lg:flex-col lg:mx-auto lg:mt-4'>
          </div>
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1]  lg:flex lg:flex-col lg:mx-auto lg:mt-4'>
          </div>
        </div>

        <div className='lg:w-[840px] lg:h-[71px] lg:gap-[8px] lg:bg-transparent lg:flex lg:flex-col lg:mx-auto lg:mt-4
        w-[390px] h-[35.04px] mb-8 flex flex-col justify-center items-center bg-transparent'>
          <div className='lg:w-[840px] lg:h-[39px] lg:bg-transparent flex flex-col items-center justify-center
          w-[370px] h-[17px]'>
            <h3 className='lg:font-medium lg:text-[32px] lg:leading-[100%] lg:text-center lg:text-[#266075]
            font-medium text-[15.39px] leading-[100%] text-center text-[#266075]'>Why Work With Us?</h3>
            <div className='lg:w-[762px] lg:h-[24px] lg:bg-transparent lg:flex lg:flex-col lg:mx-auto lg:text-[#266075] lg:text-center lg:mt-2
            '>
              <h3 className='lg:font-normal lg:text-[16px] lg:leading-[100%] lg:text-center font-normal text-[12px] leading-[100%] text-center mt-1 text-[#212121]'>Let’s Build Your Dream Team – Contact Us Today!</h3>
            </div>

          </div>

        </div>

        <div className='lg:w-[970.4px] lg:h-[680px] lg:bg-transparent lg:flex lg:mx-auto lg:mt-16 lg:justify-between'>
          <div className='lg:w-[450.4px] lg:h-[600px] lg:bg-transparent0'>
            <img src={Group} alt='Group' className='lg:h-[600px]' />
          </div>


          <div className='lg:w-[493.4px] lg:h-[673px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between
            bg-transparent lg:mt-0  w-[390px] h-[570px] flex flex-col justify-between mt-8'>
            {works.map((work) => {
              return (
                <div
                  key={work.id}
                  className='lg:w-[493.4px] lg:h-[145px] lg:gap-[8px] lg:rounded-lg lg:pt-[10px] lg:pl-[20px] 
                  lg:bg-[#DCF4FD] w-[390px] h-[120.04px] rounded-lg pt-[4.95px] pl-[9.9px] bg-[#DCF4FD]'>
                  <img src={work.picture} alt='Star' className='lg:w-[57px] lg:h-[42px] w-[50px] h-[40px] mr-4' />
                  <h3 className='lg:font-normal lg:text-[20px] lg:leading-[100%] lg:text-[#266075] lg:text-capitalize lg:mt-2
                  font-normal mt-3 text-[15.39px] leading-[100%] capitalize text-[#266075] '>{work.text}</h3>
                  <div className='lg:w-[450px] lg:h-[44px] lg:text-[#266075] lg:mt-[3px]'>
                    <p className='lg:font-light lg:text-[18px] font-light text-[12px] text-[#266075] '>{work.subtext}</p>
                  </div>
                </div>
              )
            })}
            <button className='lg:w-[158px] lg:h-[46.2px] lg:rounded-lg lg:pt-[12.88px] lg:pr-[26.62px] lg:pb-[12.88px]
      lg:pl-[26.26px] lg:bg-[#00B0F0] lg:mt-5 lg:font-medium lg:text-[18px] lg:leading-[100%] lg:mx-0
      lg:text-center lg:capitalize lg:text-[white] w-[130.2px] h-[40.8px] rounded-lg pt-[6.38px] pr-[13.18px]
      pb-[6.38px] pl-[13.18px] bg-[#00B0F0] text-[white] mt-2 mx-auto'>Contact us</button>
          </div>
        </div>
      </section>
      {/* Work Section Ends */}


      {/* Focus Section Starts */}
      <section className='lg:w-full lg:h-[680px] lg:bg-transparent lg:flex lg:flex-col lg:mx-auto 
      mb-6 bg-transparent w-[390px] h-[460px] flex flex-col items-center mx-auto'>
        <div className='lg:w-[50px] lg:h-[2px] lg:flex  lg:mx-auto lg:mb-4 ' >
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1] lg:flex lg:flex-col lg:mx-auto lg:mt-4'>
          </div>
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1]  lg:flex lg:flex-col lg:mx-auto lg:mt-4'>
          </div>
        </div>

        <div className='lg:w-[840px] lg:h-[71px] lg:gap-[8px] lg:bg-transparent lg:flex lg:flex-col lg:mx-auto lg:mt-4
         w-[390px] h-[35.04px] mb-5 flex flex-col justify-center items-center bg-transparent'>
          <div className='lg:w-[840px] lg:h-[39px] lg:bg-transparent flex flex-col items-center justify-center
          w-[370px] h-[17px]'>
            <h3 className='lg:font-medium lg:text-[32px] lg:leading-[100%] lg:text-center lg:text-[#00B0F0]
              font-medium text-[15.39px] leading-[100%] text-center text-[#00B0F0]'>Our Focus Areas</h3>
            <div className='lg:w-[762px] lg:h-[24px] lg:bg-transparent lg:flex lg:flex-col lg:mx-auto lg:text-center lg:text-[#266075] lg:mt-2'>
              <h3 className='lg:font-normal lg:text-[16px] lg:leading-[100%] lg:text-center font-normal text-[12px] leading-[100%] text-center mt-1 text-[#266075]'>Key industries we serve!</h3>
            </div>
          </div>
        </div>

        <div className='lg:w-[1000px] lg:h-[345px] lg:bg-transparent lg:mx-auto lg:mt-[60px] lg:flex lg:justify-between bg-transparent'>
          {visibleProfiles.map((profile) => {
            return (
              <div
                key={profile.id}
                className='lg:w-[300px] lg:h-[345px] lg:rounded-lg lg:pr-[13px] lg:pl-[9px] lg:pt-[9px]
                 lg:bg-[#DCF4FD] bg-[#DCF4FD]   w-[360px] h-[366px] rounded-lg pr-[0px] pl-[0px] flex flex-col  '>
                <img src={profile.picture} alt='profile' className='lg:flex lg:justify-center lg:items-center flex items-center justify-center' />
                <div className='lg:bg-[282px] lg:h-[30px] lg:mt-2 w-[330px] h-[26px] mt-2 bg-transparent flex items-center'>
                  <h3 className='lg:font-normal lg:text-[18px] lg:leading-[100%] lg:capitalize lg:text-[#266075]
                  font-normal text-[12px] capitalize text-[#266075]'>{profile.text}</h3>
                </div>
                <div className='lg:w-[103px] lg:h-[27px] lg:text-[16px] w-[330px] h-[24px] bg-transparent'>
                  <p className='lg:font-normal lg:text-[16px] lg:capitalize lg:underline lg:decoration-solid lg:decoration-0
 lg:underline-offset-0 lg:text-[#92A3A9] font-normal text-[12px] capitalize underline decoration-solid underline-offset-0 text-[#00B0F0]'>{profile.subtext}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className='lg:flex lg:justify-around lg:items-center lg:mt-3 lg:w-[100px] lg:h-[50px] 
lg:mx-auto flex justify-between items-center mt-2 w-[80px] h-[38px] bg-transparent text-[#266075] lg:text-[18px]'>
          <button onClick={handlePrev} className='lg:underline-offset-0 underline-offset-0 lg-text-[18px] text-[12px]'> Prev </button>
          <button onClick={handleNext} className='lg:underline-offset-0 underline-offset-0 lg-text-[18px] text-[12px]'>Next </button>
        </div>
      </section>
      {/* Focus Section Ends */}

      {/* Case Study Starts */}
      <section className='lg:w-full lg:h-[750px] lg:bg-transparent lg:flex lg:flex-col lg:mt-0 lg:mx-auto mb-6 bg-transparent mt-8 w-[390px] h-[970px] flex flex-col items-center mx-auto'>
        <div className='lg:w-[50px] lg:h-[2px] lg:flex  lg:mx-auto lg:mb-4 ' >

          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1] lg:flex lg:flex-col lg:mx-auto lg:mt-4'>
          </div>
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1]  lg:flex lg:flex-col lg:mx-auto lg:mt-4'>
          </div>
        </div>
        <div className='lg:w-[987px] lg:h-[95px] lg:bg-transparent lg:mx-auto lg:mb-0 lg:flex lg:flex-col lg:justify-center lg:items-center 
        w-[377px] h-[52.0px] bg-transparent mb-12 flex flex-col jc items-center  '>
          <div className='lg:w-[840px] lg:h-[39px] lg:bg-transparent '>
            <h3 className='lg:font-medium lg:text-[32px] lg:leading-[100%] lg:text-center lg:text-[#00B0F0] 
            font-medium text-[15.39px] leading-[100%] text-[#00B0F0]'>
              Case Studies & Success Stories
            </h3>
          </div>
          <div className='lg:w-[750px] lg:h-[48px] lg:bg-transparent lg:flex lg:flex-col lg:mx-auto lg:text-center lg:text-[#266075] lg:mt-[-2px]'>
            <h3 className='lg:font-normal lg:block lg:text-[20px] lg:mt-0 mt-1 lg:text-center font-light text-[12px] leaidng-[100%] text-center text-[#266075]'>Explore real-world examples of how Urgent! Hire Jobs, LLC has helped businesses and professionals achieve their goals.</h3>
          </div>
        </div>

        <div className='lg:w-[1000px] lg:h-[460.2px] lg:mt-12 lg:bg-transparent lg:mb-0 lg:flex lg:flex-row lg:justify-between  lg:mx-auto
        mt-[-20px] w-[390px] h-[870.2px] bg-transparent flex flex-col justify-between mx-auto mb-0'>
          <div className='lg:w-[420px] lg:h-[460px] lg:bg-transparent lg:mb-0 mb-[-20px]'>
            {folders
              .filter((folder) => folder.id === 1)
              .map((folder) => (
                <div key={folder.id} className='bg-transparent lg-[420px] lg:h-[460px] w-[390px] h-[420px]'>
                  <img src={folder.picture} alt={Network} className='lg:w-[420px] lg:h-[307px]' />
                  <div className='lg:mt-2 lg:px-1 lg-[420px] lg:h-[145px] bg-transparent w-[390px] h-[100px] mt-4 '>
                    <h3 className='lg:font-normal lg:text-[20px] lg:capitalize lg:text-[#266075]
                    font-normal text-[16px] leading-[100%] capitalize text-[#266075]'>{folder.text}</h3>
                    <p className='lg:font-normal lg:font-size-[16px] lg:mt-2 mt-2 lg:text-[#266075] font-light text-[14px]'>{folder.subtext}</p>
                  </div>

                </div>
              ))}
          </div>



          <div className='lg:w-[420px] lg:h-[460px]  lg:bg-transparent lg:mt-0 mt-0'>
            {
              folders.filter((folder) => folder.id === 2).map((folder) => {
                return (
                  <div key={folder.id} className='bg-transparent lg-[420px] lg:h-[460px] w-[390px] h-[420px]'>
                    <img src={folder.picture} alt={Network} />
                    <div className='lg:mt-2 lg:px-1 lg-[420px] lg:h-[145px] bg-transparent w-[390px] h-[100px] mt-4 '>
                      <h3 className='lg:font-normal lg:text-[20px] lg:capitalize lg:text-[#266075]
                    font-normal text-[16px] leading-[100%] capitalize text-[#266075]'>{folder.text}</h3>
                      <p className='lg:font-normal lg:font-size-[16px] lg:mt-2 mt-2 lg:text-[#266075] font-light text-[14px]'>{folder.subtext}</p>
                    </div>
                  </div>
                )
              })
            }
            {/* {
      folders.filter((folder) => folder.id === 2).map((folder) => (
        <div key={folder.id}>
          <h3>{folder.text}</h3>
        </div>
      ))
    } */}
          </div>
        </div>

      </section>
      {/* Case Study Ends */}

      {/* Testimonials Starts */}
      <section id='testimonials' className='lg:w-full lg:h-[770px] lg:mb-0 lg:bg-[#FAFAFA] lg:flex lg:flex-col
       w-[430px] h-[910px] bg-transparent flex flex-col mb-10'>
        <div className='lg:w-full lg:h-[140px] lg:bg-[#00B0F0] lg:flex lg:mb-0 lg:justify-around lg:items-center
        w-[430px] h-[50px] bg-[#00B0F0] flex justify-around mb-4 items-center mx-auto'>
          <div className='lg:w-[270px] lg:h-[92px] lg:bg-transparent lg:flex lg:justify-center lg:items-center
          w-[160px] h-[50px] bg-transparent flex justify-center items-center'>
            <h3 className='lg:font-normal lg:text-[28px] lg:capitalize lg:text-[#FFFFFF] font-normal text-[14px] leadin-[100%]
            capitalize text-[#FFFFFF]'>
              Partner with us for a journey to success.
            </h3>
          </div>

          <div className='lg:w-[270px] lg:h-[92px]  lg:bg-[#FFFFFF] lg:flex lg:items-center lg:justify-center
          w-[190px] h-[50px] bg-[#FFFFFF] flex items-center justify-center'>
            <h3 className='lg:font-normal lg:text-[14px] lg:text-center lg:text-[#212121] font-normal text-[12px]
            leading-[100%] text-center'>REQUEST FOR PROPOSAL</h3>
          </div>
        </div>

        <div className='lg:w-[671px] lg:h-[126px] lg:bg-transpaent lg:flex lg:justify-around lg:items-center
         lg:mx-auto w-[294px] h-[55px] bg-transparent flex justify-around items-center mx-auto'>
          <h3 className='lg:font-normal lg:text-[103.67px] lg:text-center lg:capitalize lg:text-[#EFE7E7] lg:opacity-45
          font-normal text-[45.42px] leading-[100%] text-center capitalize text-[#EFE7E7] opacity-45'>Testimonials</h3>
        </div>
        {/* width: 380;
height: 32.619049072265625;
top: 7445.57px;
left: -2px;
gap: 3.62px; */}


        <div className='lg:w-[500px] lg:h-[71px] lg:bg-transpaent lg:mt-4 lg:flex lg:flex-col lg:justify-around lg:items-center lg:mx-auto
        w-[390px] h-[45px] mt-4 flex flex-col justify-around items-center mx-auto bg-transparent'>
          <div className='lg:w-[500px] lg:h-[39px] lg:bg-transpaent lg:flex lg:items-center lg:justify-center
          w-[390px] h-[20px] bg-transparent flex items-center justify-center'>
            <h3 className='lg:font-medium lg:text-[32px] lg:text-center lg:capitalize lg:text-[#266075] text-[15.39px]
            font-medium leading-[100%] text-center capitalize text-[#266075]'>Real stories, Real impact</h3>
          </div>
          <div className='lg:w-[500px] lg:h-[24px] lg:bg-transpaent lg:flex lg:items-center lg:justify-center
          w-[390px] h-[18px] flex items-center justify-center'>
            <p className='lg:font-normal lg:text-[20px] lg:text-center lg:capitalize lg:text-[#266075]
           font-normal text-[12px] leading-[100%] text-center text-[#266075]'>Real feedback from real people who trust us.</p>
          </div>
        </div>

        {/* <div className='lg;w-[1017px] lg:h-[312px] lg:bg-red-200'> */}
        <div className='lg:w-[1000px] lg:h-[260px] lg:bg-transparent lg:mx-auto lg:mt-[60px] lg:flex lg:flex-row lg:justify-between 
        w-[390px] h-[670px] mx-auto mt-4 flex flex-col justify-between bg-transparent'>
          {/* {testimonials.filter((testimonial) => testimonial.id === 1).map((testimonial) => { */}
          {testimonials.map((testimonial) => {
            return (
              <div
                key={testimonial.id}
                className='lg:w-[321px] lg:h-[260px] lg:bg-[#DCF4FD] lg:mb-0 lg:rounded-xl lg:p-6 lg:relative
                w-[390px] h-[210px] bg-[#DCF4FD] rounded-xl p-6 relative'>
                <img src={testimonial.symbol} alt='human' className='lg:w-[41px] lg:h-[24px] w-[36px] h-[21px]  ' />
                <h3 className='lg:font-normal lg:text-[15px] lg:mt-5 lg:text-[#266075] lg:mb-10 mt-4 mb-7 font-normal text-[14px] text-[#266075]
                '>{testimonial.text}</h3>
                <div className='lg:w-[150px] lg:h-[40px] lg:ml-0 lg:bg-[#FFFFFF] lg:flex lg:items-center lg:justify-between
  lg:rounded-xl lg:absolute lg:left-[1px] lg:bottom-0 w-[155px] h-[35px] bg-[#FFFFFF] flex items-center justify-between rounded-xl
  absolute left-[0px] bottom-[-0.1px]'>
                  <img src={testimonial.picture} alt='human' />
                  <p className=' lg:w-[95px] lg:font-normal lg:text-[14px] lg:mr-0  font-medium text-[14px] mr-1 text-[#266075]'>{testimonial.name}</p>
                </div>
              </div>
            )
          })}

        </div>
      </section>
      {/* Testimonials Ends*/}

      {/* Faq Section Starts */}
      <section id='faqs' className='lg:w-full lg:h-[475px] lg:bg-transparent lg:flex lg:flex-col lg:items-center
        w-[430px] h-[370px] bg-transparent flex flex-col mb-10'>
        <div className='lg:w-[50px] lg:h-[2px] lg:flex lg:mx-auto lg:mb-4 ' >
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1] lg:flex lg:flex-col lg:mx-auto lg:mt-4'>
          </div>
          <div className='lg:w-[19px] lg:h-[2px] lg:bg-[#01B0F1]  lg:flex lg:flex-col lg:mx-auto lg:mt-4'>
          </div>
        </div>

        <div className='lg:w-[470px] lg:h-[67px] lg:bg-transparent lg:flex lg:mx-auto lg:flex-col lg:items-center
        w-[390px] h-[45px] bg-transparent flex flex-col items-center mx-auto'>
          <div className='lg:w-[470px] lg:h-[33px] lg:bg-transparent lg:mt-4 lg:flex lg:flex-col lg:items-center
           lg:justify-center w-[381px] h-[27px] mt-0 flex flex-col items-center justify-center bg-transparent'>
            <h3 className='lg:font-medium lg;text-[32px] lg:text-center lg:text-[#00B0F0] font-medium
            text-[15.39px] leading-[100%] text-center text-[#00B0F0]'>FAQs</h3>
          </div>

          <div className='lg:w-[470px] lg:h-[33px] lg:bg-transparent  lg:flex lg:flex-col lg:items-center 
          lg:justify-center w-[345px] h-[27px] flex flex-col items-center justify-center'>
            <h3 className='lg:font-normal lg:text-[16px] lg:text-center lg:text-[#266075] font-normal text-[12px] leading-[100%]
            text-center text-[#266075]'>
              Your questions answered. Your career simplified.</h3>
          </div>
        </div>

        <div className='lg:w-[581px] lg:h-[244px] lg:bg-transparent lg:mt-[40px] lg:mx-0 lg:flex lg:flex-col lg:justify-between
        w-[390px] h-[200px] bg-transparent mt-6 flex flex-col justify-between mx-auto '>
          {faqs.map((faq) => {
            return (
              <div
                key={faq.id}
                className='lg:w-[581px] lg:h-[76px] lg:bg-[#DCF4FD] lg:rounded-lg  lg:mb-0 lg:pt-[26px] lg:pr-[29px] lg:pb-[26px]
      lg:pl-[29px] lg:flex lg:justify-between lg:items-center w-[390px] h-[76px] bg-[#DCF4FD] rounded-lg pt-[14.19px]
      pr-[15.82px] pb-[14.19px] pl-[15.82px] flex  justify-between items-center mb-2 '>
                <h3 className='lg:font-normal lg:text-[16px] lg:text-center lg:text-[#266075] font-normal text-[13px]
                leading-[100%] text-center text-[#266075]'>{faq.text}</h3>
                {/* font-family: Montserrat;
font-weight: 500;
font-size: 10.91px;
line-height: 100%;
letter-spacing: 0%;
text-align: center; */}

                <img src={faq.picture} alt="Plus" className='lg:w-[16px] lg:h-[16px] w-[13px] h-[13px]' />
              </div>
            )
          })}
        </div>

        <button className='lg:mt-10 mt-8 lg:w-[158px] lg:h-[46px] lg:rounded-lg lg:pt-[12.88px] lg:pr-[26.62px] lg:pb-[12.88px]
        lg:pl-[26.62px] lg:bg-[#00B0F0]  lg:flex lg:items-center lg:justify-center w-[150px] h-[42px]  rounded-lg
        pt-[9.38px] pr-[19.38px] pb-[9.38px] pl-[19.38px] flex items-center justify-center mx-auto bg-[#00B0F0]  '>
          <h3 className='lg:font-medium lg:text-[16px] lg:leading-[100%] lg:text-center lg:text-[#FFFFFF] font-medium leading-[100%]
         text-center text-[#FFFFFF]
         '> See More FAQ</h3>
        </button>
      </section>
      {/* Faq Section Ends */}

      {/* Newsletter Starts  bg-green-200*/}
      <section id='contact' className='lg:w-full lg:h-[820px] lg:bg-transparent lg:mx-0  lg:mb-9 mb-9 mx-auto w-[390px] h-[570px]
       bg-transparent'>
        <div className='lg:w-full lg:h-[390px] lg:bg-transparent lg:relative w-[390px] h-[141px] relative'>
          <img src={Hands} alt="Hands" className='lg:w-full lg:h-[390px] lg:opacity-95 w-[390px] h-[141px] opacity-95' />
          <div className='lg:w-[800px] lg:h-[231px] lg:rounded-lg lg:p-3 lg:bg-[#DCF4FD] lg:flex  lg:flex-col lg:mx-auto
           lg:absolute lg:top-[63px] lg:left-[230px] w-[310px] h-[110px] rounded-lg p-3 bg-[#DCF4FD] flex flex-col mx-auto absolute
           top-[15px] left-[38px]'>

            <div className='lg:w-[709px] lg:h-[90px] lg:bg-transparent lg:flex lg:flex-col lg:mx-auto w-[250px] h-[40px]
            flex flex-col mx-auto bg-transparent lg:mb-0 mb-0'>
              <div className='lg:w-[709px] lg:h-[39px] lg:bg-transparent lg:flex lg:justify-center lg:items-center
              w-[191px] h-[18px] flex justify-center items-center bg-transparent mx-auto'>
                <h3 className='lg:font-medium lg:text-[32px] lg:text-center lg:text-[#00B0F0]
               font-medium text-[15px] leading-[100%] text-center text-[#00B0F0]'>Join our newsletter</h3>
              </div>
              <div className='lg:w-[709px] lg:h-[48px] lg:bg-transparent lg:mt-0 mt-1 w-[250px] h-[20px] bg-transparent' >

                <h3 className='lg:font-normal lg:text-[16px] lg:block hidden lg:text-center lg:text-[#266075] font-normal text-[12px]
                 text-center'>Stay ahead in your career with our expert insights, industry trends, and exclusive job opportunities get
                  it delivered straight to your inbox.</h3>
                <h3 className='lg:font-normal  lg:hidden block lg:text-[16px] lg:text-center lg:text-[#266075] font-normal text-[12px]
                text-center'>Stay ahead in your career with our experts.</h3>



              </div>
            </div>

            <div className="lg:w-[729px] lg:h-[61px] lg:mt-14 lg:flex lg:items-center lg:relative lg:mx-auto lg:justify-center lg:bg-transparent
            mx-auto w-[250px] h-[16px] mt-6 flex items-center justify-center relative ">
              <input type='text' placeholder="Email" className='lg:w-[500px] lg:h-[40px] lg:bg-[#FFFFFF] lg:text-left
              lg:pl-3 lg:rounded-lg lg:text-[#266075] mx-auto w-[250px] h-[22px] text-left pl-3 rounded-sm text-[#266075]' />
              <div className="lg:w-[118px]  lg:h-[40px] lg:top-[10.5px] lg:left-[498px] lg:absolute lg:rounded-lg lg:border-[0.67px]
      lg:pt-[12.88px] lg:pr-[24.62px] lg:pb-[12.88px] lg:pl-[24.26px] lg:flex lg:items-center lg:justify-center lg:bg-[#00B0F0]
      w-[60px] h-[22px] absolute rounded-md pt-[3.47px] pr-[7.17px] pb-[3.47px] pl-[7.17px] bg-[#00B0F0]  left-[190px] flex items-center justify-center">
                <h3 className="lg:w-[67px] lg:h-[22px] lg:font-[600] lg:text-[16px] lg:text-center lg:capitalize
       lg:flex lg:items-center lg:justify-center lg:lg:text-[#FFFFFF] w-[50px] h-[22px] font-medium text-[12px] leading-[100%]
       text-center flex items-center justify-center text-[#FFFFFF]">Sign up</h3>
              </div>
            </div>
          </div>
        </div >

        <div className='lg:w-full lg:h-[430px]  lg:bg-transparent  lg:mt-0 lg:flex  lg:flex-col lg:items-center lg:justify-evenly
        w-[390px] h-[420px] flex flex-col justify-center items-center bg-transparent mt-0'>
          <div className='lg:w-[900px] lg:h-[300px] lg:bg-transparent lg:flex lg:flex-col lg:justify-between w-[390px] h-[540px] flex flex-col 
        justify-center bg-transparent mt-4'>
            <div className='lg:w-[900px] lg:h-[400px]  lg:bg-transparent lg:flex  lg:justify-between bg-transparent'>


              <div className='lg:w-[538px] lg:h-[240px]  lg:bg-transparent lg:mt-0 lg:flex lg:flex-col lg:justify-between bg-transparent
        w-[390px] h-[200px] flex flex-col justify-between mt-0 '>

                <div className='lg:w-[538px] lg:h-[130px]  lg:bg-transparent lg:flex lg:flex-col lg:justify-between '>
                  <div className='lg:w-[200px] lg:h-[46.2px] lg:bg-[#00B0F0] lg:flex lg:items-center lg:justify-center
          w-[180px] h-[42.4px] bg-[#00B0F0] flex items-center justify-center'>
                    <h3 className='lg:w-[214px] lg:h-[29px] lg:font-semibold lg:text-[23.5px] 
         lg:flex lg:items-center lg:justify-center lg:leading-[100%] lg:capitalize lg:text-[#FFFFFF] font-medium
         text-[20px] leading-[100%] text-capitalize text-[#FFFFFF]'>Urgent! Hire Jobs</h3>
                  </div>
                  <div className='lg:w-[538px] lg:h-[60px]  lg:mt-[-50px]  lg:transparent mt-3 w-[380px] h-[60px] bg-transparent'>
                    <h3 className='lg:font-light lg:text-[18px] lg:text-[#266075] font-light text-[13px] text-[#266075]'> Urgent! Hire Jobs, LLC – Where Talent Meets Opportunity. we are more than a staffing agency we are a strategic partner in talent acquisition.</h3>
                  </div>
                </div>
                <div className='lg:bg-transparent lg:w-[538px] lg:h-[81px] lg:mt-[-30px] lg:border-t-[1px] lg:flex lg:items-center lg:justify-center lg:border-[#266075]
          w-[340px] h-[70px] border-t-[1px] flex items-center mt-0 border-[#266075]'>
                  <div className='lg:bg- lg:w-[538px] lg:mt-0 lg:h-[60px] lg:flex lg:flex-col lg:justify-between bg-transparent
          w-[200px] h-[50px]'>

                    <div className='lg:w-[155px] lg:h-[27px] lg:bg-transparent lg:flex lg:items-center w-[140px] h-[24px]
          bg-transparent flex items-center'>
                      <h3 className='lg:font-light lg:text-[18px] lg:leading-[100%] lg:text-[#266075] font-normal text-[12px] 
            leading-[100%] text-[#266075]'>+1 (612) 409-9199</h3>
                    </div>
                    <div className='lg:w-[200px] lg:h-[27px] lg:bg-transparent w-[200px] h-[24px]
          bg-transparent flex items-center'>
                      <h3 className='lg:font-light lg:text-[18px] lg:leading-[100%] lg:text-[#266075] font-normal text-[12px] 
            leading-[100%] text-[#266075]'> info@urgenthirejobs.com </h3>

                    </div>
                  </div>

                </div>
              </div>



              <div className='lg:w-[250px] lg:h-[130px]  lg:bg-transparent lg:flex lg:justify-between lg:mt-0 mt-4
           bg-transparent w-[210px] h-[120px] flex justify-between'>
                <div className='lg:w-[95px] lg:h-[130px]  lg:bg-transparent lg:flex lg:flex-col lg:justify-between 
          w-[95px] h-[110px] bg-transparent flex flex-col justify-between'>
                  {/* width: 95;
height: 30; */}


                  <div className='lg:w-[95px] lg:h-[27px] lg:bg-transparent lg:flex lg:items-center w-[95px] h-25px] bg-transparent
            flex items-center '>
                    <h3 className='lg:font-normal lg:text-[18px] lg:leading-[100%] lg:capitalize lg:text-[#266075]
            font-normal text-[16px] capitalize text-[#266075]'>Company</h3>
                  </div>
                  <div className='lg:w-[95px] lg:h-[27px] lg:bg-transparent lg:flex lg:items-center w-[95px] h-25px] flex items-center'>
                    <a href='/'><h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:capitalize lg:text-[#266075]
            font-normal text-[13px] capitalize text-[#266075]'>Home</h3></a>
                  </div>
                  <div className='lg:w-[95px] lg:h-[27px] lg:bg-transparent lg:flex lg:items-center  w-[95px] h-25px] flex items-center '>
                    <a href='#about'><h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:capitalize lg:text-[#266075]   font-normal text-[13px] capitalize text-[#266075]'>About Us</h3> </a>
                  </div>

                  <div className='lg:w-[95px] lg:h-[27px] lg:bg-transparent lg:flex lg:items-center  w-[95px] h-25px] flex items-center '>
                    <a href='#hire'><h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:capitalize lg:text-[#266075] font-normal text-[13px] capitalize text-[#266075]'>Our Service</h3></a>
                  </div>

                </div>

                <div className='lg:w-[95px] lg:h-[130px]  lg:bg-transparent lg:flex lg:flex-col lg:justify-between
            w-[95px] h-[110px] bg-transparent flex flex-col justify-between'>
                  <div className='lg:w-[95px] lg:h-[27px] lg:bg-transparent lg:flex lg:items-center  w-[95px] h-25px] bg-transparent
            flex items-center'>
                    <h3 className='lg:font-normal lg:text-[18px] lg:leading-[100%] lg:capitalize lg:text-[#266075]
             font-normal text-[16px] capitalize text-[#266075]'>Talent</h3>

                  </div>
                  <div className='lg:w-[95px] lg:h-[27px] lg:bg-transparent lg:flex lg:items-center  w-[95px] h-25px] flex items-center'>
                    <a href='#faqs'><h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:capitalize lg:text-[#266075] font-normal text-[13px] capitalize text-[#266075]'>Contact Us</h3></a>
                  </div>


                  <div className='lg:w-[95px] lg:h-[27px] lg:bg-transparent lg:flex lg:items-center  w-[95px] h-25px] flex items-center  '>
                    <a href='#testimonials'><h3 className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:capitalize lg:text-[#266075] font-normal text-[13px] capitalize text-[#266075]'>Testimonials</h3></a>
                  </div>

                  <ul className='lg:w-[95px] lg:h-[27px] lg:bg-transparent lg:flex lg:items-center  w-[95px] h-25px] flex items-center'>
                    <a href='#faqs'><li className='lg:font-light lg:text-[16px] lg:leading-[100%] lg:capitalize lg:text-[#266075] font-normal text-[13px] capitalize text-[#266075]'>FAQs</li></a>
                  </ul>

                </div>
              </div>
            </div>

            <div className='lg:w-[450.29px] lg:h-[21px] lg:mt-10 lg:bg-transparent lg:flex lg:items-center lg:justify-center 
          lg:mx-auto mt-3 w-[340px] h-[24px] bg-transparent flex item-center  justify-center mx-auto '>
              <h3 className='lg:font-light lg:text-[17.59px] lg:leading-[100%] lg:text-[#266075] font-light text-[12px] text-[#266075]
            '>
                Copyright 2024 Urgent! Hire Jobs S.L All rights reserved.</h3>


            </div>
            <div className='lg:w-[450.29px] lg:h-[21px] lg:mt-2  lg:bg-transparent lg:flex lg:items-center lg:justify-center lg:mx-auto
        w-[310px] h-[24px] mt-1 bg-transparent flex item-center  justify-center mx-auto'>
              <h3 className='lg:font-light lg:text-[17.59px] lg:leading-[100%] lg:text-[#266075]  text-center font-light text-[13px] text-[#266075]'>
                Developed By Wisdom Darlington Ndata.</h3>


            </div>


          </div>



        </div>


      </section>
      {/* npm run build */}
      {/* Newsletter Ends */}

    </section>
  );
}

// export default App;
export default ProfilesComponent;
