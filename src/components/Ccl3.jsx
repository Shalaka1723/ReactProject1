import React from "react";

import ConstructionIcon from "@mui/icons-material/Construction";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import { yellow } from "@mui/material/colors";
import Navbar from "./Navbar";

export default function Ccl3() {
  return (
    <>
<Navbar/>
      <section>
        <div
          className="relative bg-cover bg-center h-96 w-full brightness-50 
        "
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/tractor-27299431.jpg')",
          }}
        ></div>
      </section>
      <section>
        <div className="px-6  text-white  pb-6 ">
          <div className="pt-12 grid grid-cols-2 gap-6  ">
            <div className="ml-24 mt-10 absolute top-28 w-2/4">
              <div className="font-bold text-4xl border-l-8 border-x-yellow-400 px-4 ">
                <h1>Our Construction Services</h1>
              </div>
              <div className="mt-6  ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam nobis, quaerat minus veniam iure est repellat aliquam
                  perferendis. Ullam, nihil. Modi, sed quod.
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-yellow-400 text-black border-yellow-400 px-8 py-3 text-sm font-bold mt-12  "
                >
                  GET A FREE QUOTE
                </button>
              </div>
            </div>
            <div className="ml-52 absolute top-28 right-28 ">
              <div className="mt-0 ml-2 text-yellow-400 text-2xl font-bold">
                <h1>What We Do</h1>
              </div>
              <div className="mt-6 flex ">
                <div>
                  <CorporateFareIcon
                    style={{ color: yellow[600], fontSize: 60 }}
                  />
                </div>
                <div className="ml-4  ">
                  <div>
                    <h3 className="font-semibold text-base ">
                      Building Construction
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm font-normal w-64 mt-1 leading-4">
                      Lorem ipsum dolor sit consectetur adipisicing elit.
                      Exercitationem{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex ">
                <div>
                  <ConstructionIcon
                    style={{ color: yellow[600], fontSize: 60 }}
                  />
                </div>
                <div className="ml-4  ">
                  <div>
                    <h3 className="font-semibold text-base ">
                      Building Construction
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm font-normal w-64 mt-1 leading-4">
                      Lorem ipsum dolor sit consectetur adipisicing elit.
                      Exercitationem{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex ">
                <div>
                  <ImagesearchRollerIcon
                    style={{ color: yellow[600], fontSize: 60 }}
                  />
                </div>
                <div className="ml-4  ">
                  <div>
                    <h3 className="font-semibold text-base ">
                      Building Construction
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm font-normal w-64 mt-1 leading-4">
                      Lorem ipsum dolor sit consectetur adipisicing elit.
                      Exercitationem{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex absolute top-2/3  px-28 mt-4 shadow-lg pb-3 w-full  ">
          <div className="">
            <h2 className="font-bold text-3xl">Get a Quote For Your Project</h2>
          </div>
          <button
            type="submit"
            className="bg-white text-yellow-600 border-yellow-600 border-4 px-14 py-2 text-base font-bold ml-80  "
          >
            {" "}
            FREE QUOTE
          </button>
        </div>
      </section>
      <section className="bg-red-50">
        <div className="px-28 py-20">
          <div>
            <h1 className="font-bold text-3xl">Building Construction</h1>
          </div>
          <div className="bg-yellow-500 inline-block w-16 mt-6 rounded-lg h-3"></div>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            labore, pariatur quo possimus fuga nemo quidem iusto iure aliquid
            earum quam a illum veritatis provident dignissimos, excepturi eius.
            Mollitia doloribus rerum, repellat quasi dolor dicta impedit a
            asperiores aspernatur excepturi earum. Unde autem nulla eos cumque,
            itaque excepturi! Quasi dolor deleniti tempore nisi qui.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div>
              <li>Lectus erta consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectrtur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </div>
            <div>
              <li>Lectus erta consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectrtur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </div>
            <div>
              <li>Lectus erta consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectrtur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </div>
          </div>
        </div>
        <div className="flex   ">
          <div className="bg-black py-4 pl-52 pr-52">
            <button
              type="submit"
              className="bg-black text-white border-white border-4 px-14 py-2 text-lg font-bold   "
            >
              {" "}
              FREE QUOTE
            </button>
          </div>
          <div className="bg-yellow-500 py-4 pl-52 pr-52">
            <button
              type="submit"
              className="bg-yellow-500 text-golden-600 border-white border-4 px-14 py-2 text-lg font-bold   "
            >
              {" "}
              FREE QUOTE
            </button>
          </div>
        </div>
      </section>

      <section className="bg-red-50">
        <div className="px-28 py-20">
          <div>
            <h1 className="font-bold text-3xl">Repairs & Installations</h1>
          </div>
          <div className="bg-yellow-500 inline-block w-16 mt-6 rounded-lg h-3"></div>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            labore, pariatur quo possimus fuga nemo quidem iusto iure aliquid
            earum quam a illum veritatis provident dignissimos, excepturi eius.
            Mollitia doloribus rerum, repellat quasi dolor dicta impedit a
            asperiores aspernatur excepturi earum. Unde autem nulla eos cumque,
            itaque excepturi! Quasi dolor deleniti tempore nisi qui.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div>
              <li>Lectus erta consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectrtur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </div>
            <div>
              <li>Lectus erta consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectrtur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </div>
            <div>
              <li>Lectus erta consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectrtur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </div>
          </div>
        </div>
        <div className="flex   ">
          <div className="bg-black py-4 pl-52 pr-52">
            <button
              type="submit"
              className="bg-black text-white border-white border-4 px-14 py-2 text-lg font-bold   "
            >
              {" "}
              FREE QUOTE
            </button>
          </div>
          <div className="bg-yellow-500 py-4 pl-52 pr-52">
            <button
              type="submit"
              className="bg-yellow-500 text-golden-600 border-white border-4 px-14 py-2 text-lg font-bold   "
            >
              {" "}
              FREE QUOTE
            </button>
          </div>
        </div>
      </section>

      <section className="bg-red-50">
        <div className="px-28 py-20">
          <div>
            <h1 className="font-bold text-3xl">Custom Desgin Projects</h1>
          </div>
          <div className="bg-yellow-500 inline-block w-16 mt-6 rounded-lg h-3"></div>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            labore, pariatur quo possimus fuga nemo quidem iusto iure aliquid
            earum quam a illum veritatis provident dignissimos, excepturi eius.
            Mollitia doloribus rerum, repellat quasi dolor dicta impedit a
            asperiores aspernatur excepturi earum. Unde autem nulla eos cumque,
            itaque excepturi! Quasi dolor deleniti tempore nisi qui.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div>
              <li>Lectus erta consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectrtur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </div>
            <div>
              <li>Lectus erta consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectrtur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </div>
            <div>
              <li>Lectus erta consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectrtur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </div>
          </div>
        </div>
        <div className="flex   ">
          <div className="bg-black py-4 pl-52 pr-52">
            <button
              type="submit"
              className="bg-black text-white border-white border-4 px-14 py-2 text-lg font-bold   "
            >
              {" "}
              FREE QUOTE
            </button>
          </div>
          <div className="bg-yellow-500 py-4 pl-52 pr-52">
            <button
              type="submit"
              className="bg-yellow-500 text-golden-600 border-white border-4 px-14 py-2 text-lg font-bold   "
            >
              {" "}
              FREE QUOTE
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="px-28">
          <div className="px-80  mt-28 mx-auto ml-32  ">
            <div>
              <h1 className="font-bold text-3xl">Latest Projects</h1>
            </div>
            <div className="bg-yellow-500 inline-block ml-16 w-16 mt-6 rounded-lg h-3"></div>
          </div>
          <div className="grid grid-cols-3 gap-14 mt-8">
            <div>
              <img src="images/home.jpeg" alt="" className="h-40 w-full" />
              <div className=" border-black border mt-5">
                <h2 className="mt-8 ml-6 font-semibold text-lg">
                  Servicec Title
                </h2>
                <p className="ml-6 mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus odio est cupiditate.
                </p>
                <button
                  type="submit"
                  className="bg-white border-black border-2 px-8 py-1 text-lg font-semibold mt-6 ml-9 mb-8 "
                >
                  {" "}
                  LEARN MORE
                </button>
              </div>
            </div>
            <div>
              <img src="images/building.jpg" alt="" className="h-40 w-full" />
              <div className=" border-black border mt-5">
                <h2 className="mt-8 ml-6 font-semibold text-lg">
                  Servicec Title
                </h2>
                <p className="ml-6 mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus odio est cupiditate.
                </p>
                <button
                  type="submit"
                  className="bg-white border-black border-2 px-8 py-1 text-lg font-semibold mt-6 ml-9 mb-8 "
                >
                  {" "}
                  LEARN MORE
                </button>
              </div>
            </div>
            <div>
              <img src="images/cclbg2.jpg" alt="" className="h-40 w-full" />
              <div className=" border-black border mt-5">
                <h2 className="mt-8 ml-6 font-semibold text-lg">
                  Servicec Title
                </h2>
                <p className="ml-6 mt-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus odio est cupiditate.
                </p>
                <button
                  type="submit"
                  className="bg-white border-black border-2 px-8 py-1 text-lg font-semibold mt-6 ml-9 mb-8 "
                >
                  {" "}
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="ml-36 pl-72">
            <button
              type="submit"
              className="bg-white border-black border-4 mt-14  px-14 py-2 text-lg font-bold"
            >
              {" "}
              VIEW ALL
            </button>
          </div>
        </div>
      </section>
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
  );
}
