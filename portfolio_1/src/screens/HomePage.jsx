import React from 'react'
import { BehanceIcon, ButtonArrow, EmailIcon, LinkIcon } from '../routes/Icon'
// import Button from '@mui/material/Button';
import { Tabs, Tab } from '@mui/material';



const bgImg = require('../assets/Rectangle 8.png')
const avatarImg = require('../assets/avatatImg.png')
const aboutImg = require('../assets/abouytImg.png')
const SDP = require('../assets/SDPImg.jpg')
const ThanksM = require('../assets/thanksImg.png')
const FooterImg = require('../assets/FooterImg.png')
const thanksDekstop = require('../assets/thankde.png')

const HomePage = () => {

  // TABS 


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const contentArray = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <div className='backdrop-blur  w-full'>
      <div className=' w-full flex items-center justify-center  backdrop-filter backdrop-blur-lg '>
        <img className='w-full h-full absolute z-[-1]  object-cover' src={bgImg} alt="#" />
        <div className=' w-full lg:w-[90%]  backdrop-filter backdrop-blur-lg '>

          <div className='w-full flex flex-col-reverse lg:flex-row h-fit lg:h-screen py-4 gap-6'>
            <div className='w-full lg:w-1/2 px-3 py-3  flex items-center justify-center'>
              <div className='w-full'>
                <div className='w-full flex flex-col items-start  justify-center gap-3 lg:gap-4'>
                  <div className='flex items-center gap-2'>
                    <h1 className='text-[#FFFFFF] text-lg lg:text-3xl font-semibold'>Hello there, I’m</h1>
                    <div className='w-16 h-[1px] bg-[#FFFFFF]'></div>
                  </div>
                  <div className='flex flex-col lg:flex-row gap-2 items-start'>
                    <h1 className='text-[#FFFFFF] text-5xl lg:text-7xl font-bold'>Sanskrati </h1>
                    <h1 className='text-[#FFFFFF] text-5xl lg:text-7xl font-bold'>Moolchandani</h1>
                  </div>
                  <div className='flex flex-col items-start gap-5 lg:gap-12'>
                    <h6 className='text-[#FFFFFF] text-lg font-semibold  lg:text-3xl'>an UI/UX Designer</h6>
                    <p className='text-[#FFFFFF] text-sm font-normal lg:text-xl'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form</p>
                  </div>
                </div>
                <div className='flex items-center justify-between lg:justify-start gap-2 lg:gap-12 py-4 pt-16'>
                  {/* <Button variant="outlined">Outlined</Button> */}
                  <div className='flex items-center gap-3 border-b border-b-[#FFFFFF] w-fit py-1'>
                    <h6 className='text-[#FFFFFF] text-lg tracking-wider'>Contact me</h6>
                    <ButtonArrow />
                  </div>
                  <div className='flex items-center gap-3 border-b border-b-[#FFFFFF] w-fit py-1'>
                    <h6 className='text-[#FFFFFF] text-lg tracking-wider'>Browse resume</h6>
                    <ButtonArrow />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 flex items-center justify-center lg:justify-end py-8'>
              <div className='w-[70%] lg:w-[40%] h-[40vh] bg-[#7A3636] overflow-hidden  rounded-full border-2 border-[#F0AD00] p-1'>
                <img className='h-full w-full object-contain ' src={avatarImg} alt="avatarImg" />
              </div>
            </div>
          </div>

          {/* ABOUT DIV  */}

          <div className='w-full flex flex-col lg:flex-row px-3 '>
            <div className='w-full lg:w-[60%] py-4'>
              <h3 className='text-[#FFFFFF] text-2xl lg:text-4xl mb-0 lg:mb-6 font-semibold tracking-wider'>About me</h3>
              <div className='flex flex-col items-start gap-3 lg:gap-6 py-6'>
                <p className='text-[#FFFFFF] font-normal text-sm lg:text-xl'>Greetings! I'm Sanskrati Moolchandani, a dedicated UI/UX designer with a profound love for crafting digital experiences that marry aesthetics with functionality.</p>
                <p className='text-[#FFFFFF] font-normal text-sm lg:text-xl'>I have an relevant experience of 1 year in this creative field and this experience has allowed me to navigate the intricacies of designing for diverse user needs and creating interfaces that not only meet but exceed expectations.</p>
                <p className='text-[#FFFFFF] font-normal text-sm lg:text-xl'>I'm always eager to embark on new design adventures. Whether you have a project in mind or simply want to discuss the latest design trends over a virtual coffee, feel free to Contact me</p>
              </div>
              <div className=' hidden lg:flex items-center gap-3 border border-gradient-pink-purple mt-12 rounded px-6 py-2 w-fit '>
                <h6 className='text-[#FFFFFF] text-lg tracking-wider'>Contact me</h6>
                {/* <ButtonArrow /> */}
              </div>
            </div>
            <div className='w-full lg:w-[40%] flex flex-col  items-center justify-center'>
              <div className='relative w-full lg:w-[80%] flex flex-col  items-center  justify-center lg:justify-end lg:items-end'>
                <div className='w-[60%] lg:w-[55%] h-[40vh] border my-6 border-[#FFFFFF91]'>
                  <img className='absolute right-12 lg:right-[-7%] top-12 lg:top-11 border w-[55vw] lg:w-[16vw] h-[40vh] border-[#FFFFFF0F]' src={aboutImg} alt="aboutImg" />
                </div>
                <div className='flex lg:hidden items-center gap-3 border border-gradient-pink-purple mt-12 rounded px-6 py-2 w-fit '>
                  <h6 className='text-[#FFFFFF] text-lg tracking-wider'>Contact me</h6>
                  {/* <ButtonArrow /> */}
                </div>
              </div>
            </div>
          </div>

          {/* PROJECTS  */}
          <div className='w-full px-3'>
            <div className='w-full py-10'>
              <h3 className='text-[#FFFFFF] text-2xl font-semibold lg:text-4xl mb-0 lg:mb-6 tracking-wider'>My Projects</h3>
              <div className='w-full flex items-center pt-10 lg:pt-16 justify-center'>
                <Tabs
                  sx={{
                    // backgroundColor: '#1C1C1C1C',
                    // borderRadius: 1
                  }}
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    sx={{
                      color: '#FFFFFF85',
                      '&.Mui-selected': {
                        color: '#FFFFFF',
                        backgroundColor: "rgba(255, 255, 255, 0.17)",
                        // borderRadius: 2,
                        borderBottom: 'none',
                      },

                    }}
                    label={<h6>Apps & web</h6>}
                    value={0}
                  />
                  <Tab
                    sx={{
                      color: '#FFFFFF85',
                      '&.Mui-selected': {
                        color: '#FFFFFF',
                        backgroundColor: "rgba(255, 255, 255, 0.17)",
                      },
                      '& .MuiTabs-indicator': {
                        backgroundColor: '#FFFFFF',  // Set the indicator color to white
                      },
                    }}
                    label={<h6>Websites & landing pages</h6>}
                    value={1}
                  />
                </Tabs>
              </div>
              <div className='w-full flex flex-col items-start justify-center lg:items-center  gap-6 py-6 lg:py-16 '>
                {contentArray.map((item) => (
                  <div key={item} className='w-full lg:w-[70%] flex flex-col lg:flex-row  gap-0 lg:gap-6 py-4'>
                    <div className='w-full block lg:hidden py-6 '>
                      <h4 className='text-[#FFFFFF] text-xl'>DOUBT PANEL</h4>
                    </div>
                    <div className='rounded lg:rounded-xl overflow-hidden w-full lg:w-[40%] h-52 lg:h-72 bg-[#FFFFFF]'>
                      <img src={SDP} alt="SDP" />
                    </div>
                    <div className='w-full lg:w-1/2'>
                      <div className='w-full hidden lg:block py-3'>
                        <h4 className='text-[#FFFFFF] text-2xl'>DOUBT PANEL</h4>
                      </div>
                      <div className='flex w-full flex-col items-start gap-4 py-6'>
                        <p className='text-sm font-normal text-[#D1D1D1]'>We've enhanced the UI/UX to seamlessly integrate algorithmic subscriptions, making it more intuitive and accessible</p>
                        <p className='text-sm font-normal text-[#D1D1D1]'>Through meticulous design, we've optimized the platform's usability, ensuring traders can effortlessly harness the power of algorithms for the best trades, ultimately elevating their potential for profitable outcomes.</p>
                      </div>
                      <div className='w-full flex items-center justify-center  lg:justify-end'>
                        <div className='flex items-center gap-3 border border-gradient-pink-purple mt-10  px-6 py-2 w-fit '>
                          <h6 className='text-[#FFFFFF] text-lg lg:text-sm py-0 lg:py-1 tracking-wider'>View case study</h6>
                          {/* <ButtonArrow /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>.

          {/* CONTECT */}

          <div className='w-full px-3'>
            <h3 className='text-[#FFFFFF] text-2xl lg:text-4xl mb-6 lg:mb-8 font-semibold tracking-wider'>Contact me</h3>
            <div className=' flex flex-col items-start gap-4 py-6 lg:gap-10'>
              <div className='flex w-full items-center gap-3'>
                <EmailIcon />
                <h6 className='text-sm text-[#FFFFFF] lg:text-xl'>+ 91 7067785857</h6>
              </div>
              <div className='flex w-full items-center gap-3'>
                <EmailIcon />
                <h6 className='text-sm text-[#FFFFFF] lg:text-xl'>sansu18m@gmail.com</h6>
              </div>
              <div className='flex w-full items-center gap-3'>
                <EmailIcon />
                <h6 className='text-sm text-[#FFFFFF] lg:text-xl'>https://www.behance.net/sanskrimoolcha</h6>
              </div>
              <div className='flex w-full items-center gap-3'>
                <EmailIcon />
                <h6 className='text-sm text-[#FFFFFF] lg:text-xl'>https://www.linkedin.com/in/sanskrati-moolchandani-38b440225/</h6>
              </div>
            </div>
          </div>

          <div className='w-full px-3 h-[60vh] lg:h-[80vh] flex flex-col items-center justify-center gap-0 lg:gap-10'>
            <div className=' w-full flex items-center justify-center'>
              <img className='block lg:hidden' src={ThanksM} alt="ThanksM" />
              <img className='hidden lg:block' src={thanksDekstop} alt="thanksDekstop" />
            </div>
            <div className='w-full flex items-center justify-center'>
              <img className='w-full h-[30vh] object-contain' src={FooterImg} alt="FooterImg" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage
