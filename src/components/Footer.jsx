import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { yellow } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [message,setMessage] = useState("")

let handleSend=()=>{
  contactApi(name, email, message)
}

  return (
    <>
        
        <section>
        <div className="grid grid-cols-2 mt-20">
          <div className="bg-yellow-500 ">
            <div className="px-8">
              <div>
                <h2 className="mt-6 font-semibold text-4xl">Contact Us</h2>
              </div>
              <div className="bg-black inline-block w-16 mt-4 mb-4 rounded-lg h-2"></div>
              <div className="grid grid-cols-2 gap-4 ">
                <div>
                  <h1>Name</h1>
                  <input value={name} onChange={(e)=>{setName(event.target.value)}} placeholder='Enter name' className='py-2 px-4 '/>
                </div> 
                <div>
                  <h1>Email</h1>
                  <input value={email} onChange={(e)=>{setEmail(event.target.value)}} placeholder='Enter email' className='py-2 px-4 '/>
                </div> 
                
                <div>
                  <h1>Message</h1>
                  <input value={message} onChange={(e)=>{setMessage(event.target.value)}} placeholder='Type your message' className=' h-auto w-full p-2'/>
                </div>

              </div>
              <div className="ml-96">
                <button onClick={()=>{handleSend()}}
                  type="submit" 
                  className="bg-yellow-500 border-white text-white border-4 mt-6  px-8 py-3 text-base font-bold ml-2 mb-6">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-black flex items-center justify-center ">
              <FacebookIcon style={{ color: yellow[50], fontSize: 80 }} className="pr-14" />
              <TwitterIcon style={{ color: yellow[50], fontSize: 80 }} className="pr-14"/>
              <InstagramIcon style={{ color: yellow[50], fontSize: 80 }} className="pr-14"/>
            </div>
            <div className="px-16 mt-12">
              <div className="flex items-center mb-6 ">
                <LocationOnIcon style={{ fontSize: 30 }} />
                <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="flex items-center mb-6  ">
                <CallIcon style={{ fontSize:30 }} />
                <p className="font-semibold">+00 123 456 78</p>
              </div>
              <div className="flex items-center ">
               <EmailIcon style={{ fontSize: 30 }} />
               <p className="font-semibold">contractioninc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
