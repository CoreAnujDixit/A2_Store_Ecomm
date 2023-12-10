import React from "react";
import { NavLink } from "react-router-dom";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

function Navbar() {
  return (
    <div className="bg-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to='/'>
          <img
            src="https://supplier-prod-temp-files.s3.ap-southeast-1.amazonaws.com/products-upload/cataloging/1702125633503/STORE.png"
            alt="Store Logo"
            width='150'
          />
        </NavLink>

        <div className="flex items-center gap-4">
          <NavLink to='/' className="text-black hover:text-orange-500">Home</NavLink>

          <NavLink to='/cart' className="text-black hover:text-orange-500">
            <PiShoppingCartSimpleDuotone size={24} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
