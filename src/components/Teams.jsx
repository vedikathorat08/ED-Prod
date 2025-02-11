import React from 'react'
import jaiswalSir from '../assests/jaiswal-sir.png'
import ritin from '../assests/Ritinedc-1.jpg'
import Om from '../assests/Om.jpg'
import { FaLinkedin, FaMailBulk } from 'react-icons/fa'
import shreya from '../assests/shreya patil.jpg'
import { Fade, Slide } from 'react-awesome-reveal'
import vinay from '../assests/vinay-marta.png'
import pratham from '../assests/pratham-patil.jpg'
import vedant from '../assests/vedant-sonwalkar.jpg'
import shubham from '../assests/Shubham Shinde startupX.jpg'
import heramb from '../assests/heramb-patil.jpg'
import kabeer from '../assests/Kabeer Ahmed Merchant.jpg'
import atharva from '../assests/atharva-ombase.png'
import digvijay from '../assests/Digvijay_.jpg'
import mahesh from '../assests/mahesh-mastpure.png'
import monisha from '../assests/monisha-arora.jpg'
import sashi from '../assests/sashi chirme.png'
import prasad from '../assests/prasad parange.jpg'
import madhvi from '../assests/madhavi-bhong.jpg'
import dhanashri from '../assests/dhanashri.jpg'
import parag from '../assests/parag jadhav.png'
import yash from '../assests/yash mulya.png'
import group from '../assests/EDCGrp.jpg'
const teamMembers = [
  {
    name: 'Prof N.G Jaiswal',
    role: 'Faculty Co-ordinator',
    image: jaiswalSir,
    linkedin: 'https://www.linkedin.com/in/drngjaiswal/?originalSubdomain=in',
    email: 'ngj_mech@pvgcoet.ac.in'
  },
  {
    name: 'Om Nalagune',
    role: 'General Secretary',
    image: Om,
    linkedin: 'https://www.linkedin.com/in/om-nalagune-55a2b0243/',
    email: 'sharvinpharande@gmail.com'
  },
  {
    name: 'Ritin Wadekar',
    role: 'Mentor',
    image: ritin,
    linkedin: 'https://www.linkedin.com/in/ritin-wadekar/?originalSubdomain=in',
    email: 'ritinwadekar6@gmail.com'
  },
  {
    name: 'Heramb Patil',
    role: 'Technical Head',
    image: heramb,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Shreya Patil',
    role: 'Joint-General Secretary',
    image: shreya,
    linkedin: '#',
    email: 'shreya0987p@gmail.com'
  },
  {
    name: 'Yash Mulya',
    role: 'Jt.General Secretary',
    image: yash,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Vinay Marta',
    role: 'Treasurer',
    image: vinay,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Pratham Patil',
    role: 'Joint-Treasurer',
    image: pratham,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Vedant Sonwalkar',
    role: 'General Manager',
    image: vedant,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Shubham Shinde',
    role: 'Startup Executive',
    image: shubham,
    linkedin: '#',
    email: ''
  },
,
  {
    name: 'Kabeer Merchant',
    role: 'Content Development Head',
    image: kabeer,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Atharva Ombase',
    role: 'Media Head',
    image: atharva,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Digvijay Maskar',
    role: 'Design Head',
    image: digvijay,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Parag Jadhav',
    role: 'Design Head',
    image: parag,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Mahesh Mastapure',
    role: 'Head of curation',
    image: mahesh,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Monisha Arora',
    role: 'PR Head',
    image: monisha,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Sashi Chirme',
    role: 'Head of Sponsorship',
    image: sashi,
    linkedin: '',
    email: ''
  },
  {
    name: 'Prasad Parange',
    role: 'Operations Head',
    image: prasad,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Madhavi Bhong',
    role: 'Documentation Head',
    image: madhvi,
    linkedin: '#',
    email: ''
  },
  {
    name: 'Dhanashri Katarkhatavkar',
    role: 'Aesthetics Co-Head',
    image: dhanashri,
    linkedin: '#',
    email: ''
  }
]

const Teams = () => {
  return (
    <div
      name='team'
      className='px-4 py-3 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-3'
    >
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <div className='text-center text-white text-4xl'>
          <Fade triggerOnce={true}>
            <p className='font-bold inline-block px-3 py-px mb-4 tracking-wider text-[#00FFFF] uppercase rounded-full bg-teal-accent-400'>
              Meet The Team :
            </p>
          </Fade>
        </div>
        <h2 className='max-w-lg mb-2 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='1d4040f3-9f3e-4ac7-b117-7d4009658ced'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'></span>
          </span>{' '}
        </h2>
        <p className='text-base text-gray-700 md:text-lg'></p>
      </div>

      <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className='items-center justify-center relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
              <Slide
                triggerOnce={true}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <img
                  className='w-60 h-60 object-cover rounded-xl object-center border-2 border-gray-500 md:h-64 xl:h-80 xl:w-full mx-auto'
                  src={member.image}
                  alt={member.name}
                />
              </Slide>

              <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
                <p className='mb-1 text-lg font-bold text-gray-100'>
                  {member.name}
                </p>
                <p className='mb-4 text-xs text-gray-100'>{member.role}</p>
                <div className='flex items-center justify-center space-x-3'>
                  <a
                    href={member.linkedin}
                    className='text-white transition-colors duration-300 hover:text-teal-accent-400'
                  >
                    <FaLinkedin size={25} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className='text-white transition-colors duration-300 hover:text-teal-accent-400'
                  >
                    <FaMailBulk size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-10 mb-10'>
      <img
        src={group}
        alt='Team Photo'
        className='w-1/2 h-auto'
      />
    </div>
      
    
    </div>

    // Add a group photo
 

  )
}

// Add a group photo of the team members in the bottom of this component


export default Teams
