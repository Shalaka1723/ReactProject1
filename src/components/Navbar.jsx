import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Navbar() {
  return (
    <>
      <div className="max-h-15 px-6 pb-4">
        <header className="top-0  ">
          <nav className="flex justify-between items-center p-1.7 pt-4 text-center">
            <div className="text-lg font-bold">
              <h1>Constrution Company Landing</h1>{" "}
            </div>
            <div className="flex ">
              <ul className="flex items-center pr-3 ">
                <li className="text-sm pr-8">Project</li>
                <li className="pr-8 text-sm">Blog</li>
                <li className="pr-8 text-sm">Portfolio</li>
                <li className="pr-8 text-sm">Service</li>
                <li className="pr-8 text-sm">Contact</li>
                <li className="pr-8 text-sm">About</li>
                <li className="pr-8 text-sm">Home</li>
              </ul>
              <div>
                <ShoppingCartIcon />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Navbar;
