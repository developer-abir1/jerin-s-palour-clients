import React from 'react';
import service1 from '../Image_Icon/Image/Ellipse 90.png';
const Service = () => {
  return (
    <div className=" mb-4">
      <h2 className="text-3xl text-center font-bold mt-10">
        <span>Our Awesome </span>

        <span className=" text-pink-600">Service</span>
      </h2>

      <div className=" flex justify-center items-center flex-col">
        <div className="  grid md:grid-cols-3 gap-4 mt-10 grid-cols-1  ">
          {servces.map((item, index) => (
            <div
              key={index}
              className="card w-96  hover:shadow-xl mr-5  my-4  hover:bg-base-200 cursor-pointer border-none shadow-none "
            >
              <figure>
                <img src={item.img} alt="Shoes" className="h-44 w-44 p-2" />
              </figure>
              <div className="card-body">
                <h2 className="   text-center text-xl font-bold">
                  {item.title}
                </h2>
                <h2 className="   text-center text-2xl  text-pink-600 font-bold">
                  ${item.price}
                </h2>

                <p className=" text-gray-400 text-sm">{item.discription}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="mt-5 mb-5 btn bg-pink-500 hover:bg-pink-600 border-0">
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;

const servces = [
  {
    id: 36,

    title: 'Anti Age Face Treatment',

    discription:
      'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
    img: '/img/Icon/Group 1372.png',
    price: 99,
  },

  {
    id: 36,

    title: 'Hair Color & Styleing',

    discription:
      'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    img: '/img/Icon/Group 1373.png',
    price: 99,
  },

  {
    id: 36,

    title: 'Skin Care Treatment',

    discription:
      'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    img: '/img/Icon/Group 1374.png',
    price: 99,
  },
];
