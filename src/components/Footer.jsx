import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { yellow } from "@mui/material/colors";

export default function Footer() {
  return (
    <>
            <section>
        <div className="grid grid-cols-2 mt-20">
          <div className="bg-yellow-600 ">
            <div className="px-8">
              <div>
                <h2 className="mt-6 font-semibold text-4xl">Contact Us</h2>
              </div>
              <div className="bg-black inline-block w-16 mt-4 mb-4 rounded-lg h-2"></div>
              <div className="grid grid-cols-2 gap-4 ">
                <div className="w-72 bg-white h-14">
                  <h3 className="mt-4 ml-4">Name</h3>
                </div>
                <div className="w-72 ml-1 bg-white h-14">
                  <h3 className="mt-4 ml-4">Email</h3>
                </div>
                <div className=" bg-white h-48 col-span-3">
                  <h3 className="mt-4 ml-4">Message</h3>
                </div>
              </div>
              <div className="ml-96">
                <button
                  type="submit"
                  className="bg-yellow-600 border-white text-white border-4 mt-6  px-8 py-1 text-base font-bold ml-2 mb-6"
                >
                  {" "}
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-black flex items-center justify-center ">
              <FacebookIcon style={{ color: yellow[100], fontSize: 80 }} className="pr-14" />
              <TwitterIcon style={{ color: yellow[100], fontSize: 80 }} className="pr-14"/>
              <InstagramIcon style={{ color: yellow[100], fontSize: 80 }} className="pr-14"/>
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
