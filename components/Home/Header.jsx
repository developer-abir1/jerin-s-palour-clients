import React from 'react';
import Image from 'next/image';
import photo from '../../components/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';
const Header = () => {
  return (
    <div className=" bg-orange-50    h-screen flex items-center">
      <div className=" grid  grid-cols-1 md:grid-cols-2 gap-4  container  m-auto ">
        <div className="ml-5">
          <h1 className=" uppercase text-2xl md:text-6xl font-bold ">
            BEAUTY SALON FOR EVERY WOMEN
          </h1>
          <p className=" text-gray-400 my-3 py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, minus esse placeat at suscipit explicabo!
          </p>
          <button className=" btn bg-pink-500  border-0 hover:bg-pink-600">
            Get an appoinment
          </button>
        </div>
        <div className=" flex justify-center items-center">
          <img
            src={
              '/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
            }
            alt=""
            className="md:h-96   h-72 w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
