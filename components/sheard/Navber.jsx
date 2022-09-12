import Image from 'next/image';
import React from 'react';
import logo from '../Image_Icon/Image/logo.png';

const Navber = () => {
  return (
    <div className="   container m-auto   relative ">
      <div className="  navbar   absolute     ">
        <div className=" navbar-start  ">
          <Image src={logo} alt="" height={50} width={100} />
        </div>
        <div className=" navbar-end            ">
          <a className="btn btn-ghost">Home</a>
          <a className="btn btn-ghost">Home</a>
          <a className="btn btn-ghost">Home</a>
          <a className="btn btn-ghost">Home</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
