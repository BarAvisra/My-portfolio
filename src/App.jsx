import './index.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import mainImage from './assets/main.png';
import contactMeImage from './assets/contactme.png';
import codingIcon from './assets/codingicon.jpeg';
import bootstrap from './assets/Icons/bootstrap.svg';
import css3 from './assets/Icons/css3.svg';
import html5 from './assets/Icons/html5.svg';
import java from './assets/Icons/java.svg';
import js from './assets/Icons/js.svg';
import mongodb from './assets/Icons/mongodb.svg';
import nodejs from './assets/Icons/nodejs.svg';
import react from './assets/Icons/react.svg';
import cocktailGenImage from './assets/ProjectImages/cocktailGen.png';
import weather from './assets/ProjectImages/weatherImage.png';
import cryptoTracker from './assets/ProjectImages/cryptoTracker.png';
import BackToTopButton from './Components/BackToTheTop'
import { useState, useEffect } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    const initialValue = saved === "true";
    return initialValue || false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);


  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className='bg-white px-10 dark:bg-gray-900'>
          <section className="pb-10">
            <nav className='py-10 mb=12 flex justify-between'>
              <h1 font-burtons className='text-xl font-custom' style={{ color: '#22668D' }}>
                <img src={codingIcon} alt="Icon" className="w-12 h-12 spin-hover " />
              </h1>
              <ul className='flex items-center'>
                <li> <BsFillMoonStarsFill onClick={() => {
                  setDarkMode(!darkMode)
                }}
                  className='cursor-pointer text-2xl text-gray-500'
                /></li>
                <li>
                  <a href="#" className='px-4 py-2 rounded-lg ml-8 text-white' style={{ backgroundColor: '#22668D' }}>Resume</a>
                </li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2
                className="text-5xl py-2 font-medium"
                style={{ color: '#8ECDDD', animation: 'fadeInUp 1s ease-out' }}
              >
                Hi!
              </h2>
              <div className='text-5xl py-2 font-medium' style={{ color: '#8ECDDD' }}>
                <span
                  className="relative"
                  style={{ top: '-8px', animation: 'fadeInUp 0.5s ease-out' }}
                >
                  My Name is
                </span>
                <h2 className='text-7xl py-2 font-medium inline-block ml-2' style={{ color: '#22668D', animation: 'fadeInUp 1s ease-out' }}>
                  Bar Avisra
                </h2>
              </div>
              <p className='text-2xl py-2 font-medium font-custom' style={{ color: '#8ECDDD', animation: 'fadeInUp 1s ease-out' }}>
                and I am a passionate fullstack web developer
              </p>
            </div>
            <div
              className="relative mx-auto rounded-full w-80 h-80 overflow-hidden"
              style={{ backgroundImage: 'linear-gradient(to bottom, #22668D, #8ECDDD)', animation: 'zoomIn 0.5s ease-out' }}
            >
              <img src={mainImage} alt="main" />
            </div>

          </section>

          <section>
            <div className='flex justify-center' style={{ color: "#8ECDDD" }}>
              <h3 className='text-3xl text-center'>
                <span className='inline-block underline-offset-2' style={{ color: "#22668D" }}>Technologies</span> I've been working with recently
              </h3>
            </div>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-10 mt-10 mx-auto justify-items-center auto-cols-auto">
                <img
                  src={html5}
                  alt="HTML5"
                  className="w-16 h-16 transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <img src={css3} alt="CSS3" className="w-16 h-16 transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <img src={java} alt="Java" className="w-16 h-16 transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <img src={js} alt="JavaScript" className="w-16 h-16 transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <img src={mongodb} alt="main" className="w-16 h-16 transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <img src={nodejs} alt="main" className="w-16 h-16 transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <img src={react} alt="main" className="w-16 h-16 transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <img src={bootstrap} alt="main" className="w-16 h-16 transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
              </div>
            </div>
            <div className='flex justify-center' style={{ color: "#8ECDDD" }}>
              <h3 className='text-3xl py-1 text-center mt-5'>
                <span className='inline-block underline-offset-2' style={{ color: "#22668D" }}>Projects</span> I've been working on recently
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 mb-10 mt-10">
              <div className="max-w-xs mx-auto md:max-w-sm rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 mb-6">
                <div className="relative">
                  <img src={cryptoTracker} alt="Project" className="w-100 h-100" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                    <h3 className="text-lg font-bold">cryptoTracker</h3>
                    <p className="text-sm">
                      Track trending coins, search with ease, deep-dive with detailed stats and charts. Dark mode is available.
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <a
                    href="https://cryptotrackerbyavisra.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-gradient-to-r from-darkBlue to-lightBlue text-white font-bold py-2 px-4 rounded-lg hover:brightness-110 transition-all text-center"
                  >
                    VIEW PROJECT
                  </a>
                </div>
              </div>
              <div className="max-w-xs mx-auto md:max-w-sm rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 mb-6">
                <div className="relative">
                  <img src={cocktailGenImage} alt="Project" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                    <h3 className="text-lg font-bold">CocktailGen</h3>
                    <p className="text-sm">
                      Discover & blend unique cocktails with a click! Perfect mixes for memorable nights. #ShakenNotStirred
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <a
                    href="https://cocktailgen.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-gradient-to-r from-darkBlue to-lightBlue text-white font-bold py-2 px-4 rounded-lg hover:brightness-110 transition-all text-center"
                  >
                    VIEW PROJECT
                  </a>
                </div>
              </div>
              <div className="max-w-xs mx-auto md:max-w-sm rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 mb-6">
                <div className="relative">
                  <img src={weather} alt="Project" className="w-100 h-100" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                    <h3 className="text-lg font-bold">Weather Now</h3>
                    <p className="text-sm">
                      The weather app provides real-time weather info for any location. Simply enter your location to check if the sun is out!
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <a
                    href="https://weatherr-now.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-gradient-to-r from-darkBlue to-lightBlue text-white font-bold py-2 px-4 rounded-lg hover:brightness-110 transition-all text-center"
                  >
                    VIEW PROJECT              </a>


                </div>
              </div>

            </div>

          </section>
          <section className=" py-10">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold text-darkBlue">Contact Me</h2>
              <p className="mt-3 text-lg text-gray-600">Feel free to reach out through my social media or drop me an email.</p>

              <div
                className="relative mx-auto rounded-full w-80 h-80 overflow-hidden mt-7"
                style={{ backgroundImage: 'linear-gradient(to bottom, #22668D, #8ECDDD)', animation: 'zoomIn 0.5s ease-out' }}
              >
                <img src={contactMeImage} alt="main" className="mx-auto" />
              </div>

              <div className='text-5xl flex justify-center gap-16 py-2 mt-3 text-gray-700'>
                <a href="https://github.com/BarAvisra"
                  target='_blank'>
                  <AiFillGithub className='text-5xl cursor-pointer hover:text-gitColor' />
                </a>
                <a href="https://www.linkedin.com/in/bar-avisra-1a930623a/"
                  target='_blank'>
                  <AiFillLinkedin className='text-5xl cursor-pointer hover:text-linkedinColor' />
                </a>
                <a href="https://www.facebook.com/bar.avisra/"
                  target='_blank'>
                  <AiFillFacebook className='text-5xl cursor-pointer hover:text-facebookColor' />
                </a>
              </div>

              <div className="mt-4">
                <a href="mailto:cripsy3@gmail.com" className="text-lg text-22668D hover:underline text-lightBlue">cripsy3@gmail.com</a>
              </div>
            </div>

          </section>
        </main>
        <BackToTopButton />
      </div>
    </>
  )
}

export default App
