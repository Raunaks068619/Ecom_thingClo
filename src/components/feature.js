import React from "react"

const featuresComp = [
  {
    id: 1,
    imgsrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
  },
  {
    id: 2,
    imgsrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
  },
  {
    id: 3,
    imgsrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
  },
]

export default function Feature(fheading, fsubheading, fclass) {
  return (
    <div className="p-10 mt-10 bg-white">
      <div className=" flex flex-col items-center">
        <h1 className="font-semibold">Our Latest Collections</h1>
        <p className="text-xl text-gray-600">
          GET READY FOR WINTER! Our latest winter collection is out checkout the
          best of thingClo store
        </p>
      </div>
      {/* <div className="flex md:flex-row flex-col justify-center md:space-x-20">
        {featuresComp.map(feature => (
          <div
            key={feature.imgsrc}
            className="card shadow-xl sm:image-full w-72 "
          >
            <figure>
              <img
                className="object-cover object-center"
                src={feature.imgsrc}
              />
            </figure>
            <div className="justify-end card-body">
              <div className="">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex flex-col md:flex-row md:justify-center items-center bg-white md:space-x-10 p-0">
        {featuresComp.map(feature => (
          <a
            href="store"
            key={feature.imgscr}
            className="md:w-72 w-60 md:h-96 h-72 my-6 p-0 bg-white justify-center items-center rounded-xl btn border-0 hover:bg-white hover:shadow-xl"
          >
            <img
              src={feature.imgsrc}
              alt=""
              className="w-full h-full object-center object-cover hover:opacity-50 rounded-xl"
            />
            <a
              href="store"
              className="link z-10 absolute p-2 rounded-md  glass normal-case font-normal text-white text-lg no-underline "
            >
              See collection
            </a>
          </a>
        ))}
      </div>
    </div>
  )
}
