import React, { useState } from "react";
import cclbg1 from "../assets/CCL images/cclbg1.jpg";
import cclbg2 from "../assets/CCL images/cclbg2.jpg";
import Clients from "../assets/CCL images/Clients.png";
import g1 from "../assets/CCL images/g1.png";
import g2 from "../assets/CCL images/g2.png";
import g3 from "../assets/CCL images/g3.png";
import g4 from "../assets/CCL images/g4.png";
import g5 from "../assets/CCL images/g5.png";
import g6 from "../assets/CCL images/g6.png";
import StarIcon from "@mui/icons-material/Star";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import { pink, yellow } from "@mui/material/colors";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
const[abc,setAbc] = useState(1)  
 
  return (
    <>
      <Navbar />

      <div className="text-white self-center">
        { abc? <img
          src={cclbg1}
          className=" h-[720px] w-full relative top-0 brightness-[0.25]  "
        />
        :
        <img
          src={cclbg2}
          className=" h-[720px] w-full relative top-0 brightness-[0.25]  "
        /> }

        <div className=" absolute text-center inset-60 ">
          <hr className="w-14 mx-auto mb-8 border-4 border-yellow-400 " />
          <h1 className=" text-6xl font-bold">Construction Inc</h1>
          <p className="text-xl p-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
          <button className="bg-yellow-500 text-center p-5 pl-10 pr-10 ">
            VIEW OUR WORK
          </button>
        </div>
      </div>

      <div className=" bg-white mt-20 grid grid-rows-2 grid-cols-3 gap-10 pl-28  pr-28">
        <div>
          <img src={g1} />
          <h1 className="font-bold">Building Construction</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
        </div>

        <div>
          <img src={g2} />
          <h1 className="font-bold">Building Repairs</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
        </div>

        <div>
          <img src={g3} />
          <h1 className="font-bold">Demolition</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
        </div>

        <div>
          <img src={g4} />

          <h1 className="font-bold">Foundation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
        </div>

        <div>
          <img src={g5} />
          <h1 className="font-bold">Painting & Exterior</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
        </div>

        <div>
          <img src={g6} />
          <h1 className="font-bold">Site Management</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
        </div>
      </div>

      <div className="flex flex-row mt-20 ">
        <div className="bg-yellow-400 w-2/6 place-content-center p-10 pr-50 flex flex-col gap-10  content-center">
          <div >
            <KeyboardDoubleArrowRightIcon
              className="float-left "
              sx={{ fontSize: 60, color: "white" }}
            />

            <h1 className="font-bold">Eco Friendly Construction</h1>
            <p>
              Donec sollicitudin molestie malesuada. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi.
            </p>
          </div>

          <div>
            <KeyboardDoubleArrowRightIcon
              className="float-left"
              sx={{ fontSize: 60, color: "white" }}
            />
            <h1 className="font-bold">Eco Friendly Construction</h1>
            <p>
              Donec sollicitudin molestie malesuada. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi.
            </p>
          </div>

          <div>
            <KeyboardDoubleArrowRightIcon
              className="float-left"
              sx={{ fontSize: 60, color: "white" }}
            />
            <h1 className="font-bold">Eco Friendly Construction</h1>
            <p>
              Donec sollicitudin molestie malesuada. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi.
            </p>
          </div>
        </div>

        <div className=" flex flex-col w-4/6">
          <div className="bg-gray-100 p-28 pb-32 ">
            <h1 className=" font-bold text-4xl">
              No Project Too Big Or Too Small
            </h1>
            <hr className="w-12 mt-10 mb-10 border-4 border-yellow-400" />
            <div className="columns-2 gap-12 text-balance  pr-28">
              <p>
                {" "}
                Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
                Proin cursus, dolor a mollis consectetur, risus dolor fermentum
                massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
                tortor ultrices bibendum. Nulla fermentum, metus quis sodales
                tristique, augue mauris molestie augue, non feugiat ligula neque
                nec felis
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
                erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
                cursus, dolor a mollis consectetur, risus dolor fermentum massa,
                a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
                ultrices bibendum. Nulla fermentum, metus quis sodales
                tristique,
              </p>
            </div>
          </div>

          <div className="flex flex-row p-6 place-content-between bg-black ">
            <h1 className="font-bold text-4xl text-white self-center">
              {" "}
              Get Free Consultation
            </h1>
            <button className="border-yellow-400 border-4 m-5 p-4  text-yellow-400 font-bold ">
              {" "}
              ONLINE ESTIMATE FORM
            </button>
          </div>
        </div>
      </div>

      <div className="text-white  self-center relative">
        
        <img
          src={cclbg2}
          className=" h-[720px] w-full static  brightness-[0.25]  "
        />
        <div className="text-center absolute inset-44 ">
          <hr className="w-14 mx-auto mb-8 border-4 border-yellow-400 " />
          <h1 className=" text-6xl font-bold">
            We've been building for over 20 years
          </h1>
          <p className="text-xl p-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
          <button className="bg-yellow-500 text-center p-5 pl-10 pr-10 ">
            ABOUT US
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-10">
        <h1 className=" p-16 text-center text-5xl font-bold">
          {" "}
          Client Testimonials
        </h1>
        <hr className=" mx-auto mb-10 w-16 border-4 border-yellow-400 "></hr>

        <div className=" pl-32 pr-32 flex flex-row gap-16 mt-4 ">
          <div className="bg-white p-10 pl-16 pr-16 text-lg w-1/3 content-center justify-items-center justify-center justify-self-center">
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <p className="mt-8 mb-8">
              {" "}
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam.”
            </p>
            <h1 className="font-semibold"> John Smith</h1>
          </div>

          <div className="bg-white p-10 pl-16 pr-16 text-lg w-1/3 content-center justify-items-center justify-center justify-self-center">
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <p className="mt-8 mb-8">
              {" "}
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam.”
            </p>
            <h1 className="font-semibold"> John Smith</h1>
          </div>

          <div className="bg-white p-10 pl-16 pr-16 text-lg w-1/3 content-center justify-items-center justify-center justify-self-center">
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <StarIcon sx={{ color: yellow[500] }} />
            <p className="mt-8 mb-8">
              {" "}
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam.”
            </p>
            <h1 className="font-semibold"> John Smith</h1>
          </div>
        </div>
        <div className="p-20">
          
        <img src={Clients} className=" object-cover self-center w-full" />
        </div>
      </div>

      <Footer />
    </>
  );
}
