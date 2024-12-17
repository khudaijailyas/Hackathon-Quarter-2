import React from "react";

import Image from "next/image";
import Link from "next/link";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";


const Product  =  () =>  {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 md:flex md:items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/ProductDetailShoe.png" // Place this image in the public folder
            alt="Nike Air Force 1 PLT.AF.ORM"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 mt-6 h-[413px] w-[374px] md:mt-0 md:pl-10">
          <h1 className="text-3xl  font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
          <p className="text-gray-700 mb-6">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its "inside out"-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials, and aged midsole aesthetic give this release
            an artisan finish.
          </p>
          <p className="text-2xl font-bold mb-6">₹ 8,695.00</p>
          <button            className=" bg-black text-white flex items-center justify-center  rounded-full font-medium text-[15px]  hover:bg-gray-800 py-3.5 px-7  cursor-pointer">
          {/*className="bg-black text-white px-20 py-2.5 text-sm font-medium rounded-full hover:bg-gray-800"*/}

          <svg xmlns=""   fill="currentColor" className="w-4 mr-3" viewBox="0 0 511 511.999">
                <path     
               d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
               data-original="#000000" ></path>
              </svg>

           Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product