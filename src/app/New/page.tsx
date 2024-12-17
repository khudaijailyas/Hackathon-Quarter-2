import Image from "next/image";

export default function MainPage() {
  return (
    <>
    <div className="h-[68px] w-[1280px] bg-[#F5F5F5]">
    <p className="text-xl text-center font-bold"> Hello Nike App</p>
    <p className="text-xl text-center">Load the app to access everything Nike.<span className="font-bold underline">Get Your Great</span></p>
    </div>
    
    <div className="w-screen bg-gray-100">
      {/* Fullscreen Sneaker Image */}
      <div className="relative w-full h-screen">
        <Image
          src="/MainShoes.png" // Replace with the actual image in the public folder
          alt="Sneaker"
          layout="fill"
          objectFit="cover" // Ensures the image fills the entire screen
          objectPosition="center" // Centers the image
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center text-center bg-white py-12">
        {/* Section Title */}
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
          First Look
        </p>
        <h1 className="text-4xl md:text-6xl  mb-4">
          NIKE AIR MAX PULSE
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="bg-white px-6 py-8 relative">
        {/* Title and Shop Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-bold rounded-full">Shop</button>
            <div className="flex space-x-2">
              
              

            <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="16px"  fill="#fff" className="inline" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>
        </button>
      
              
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#fff" className="inline" viewBox="0 0 492.004 492.004">
          <path
            d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
            data-original="#000000" />
        </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="grid grid-cols-3 gap-2">
          {/* Product 1 */}
          <div className="border border-white rounded-md p-4">
            <Image
              src="/Shoe1.png" // Replace with actual image from the public folder
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4">
                <div className="flex">
              <h3 className="font-medium text-lg pl-11">Nike Air Max Pulse</h3>
              <p className="font-bold mt-1 pl-11">₹ 13,995</p>
              </div>
              <p className="text-gray-500 text-sm pl-11">Women's Shoes</p>
              
            </div>
          </div>

          {/* Product 2 */}
          <div className="border border-white rounded-md p-4">
            <Image
              src="/Shoe2.png" // Replace with actual image from the public folder
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4">
                <div className="flex">
              <h3 className="font-medium text-lg pl-11">Nike Air Max Pulse</h3>
              <p className="font-bold mt-1 pl-11">₹ 13,995</p>
              </div>
              <p className="text-gray-500 text-sm pl-11">Men's Shoes</p>
              
            </div>
          </div>

          {/* Product 3 */}
          <div className="border border-white rounded-md p-4">
            <Image
              src="/Shoe3.png" // Replace with actual image from the public folder
              alt="Nike Air Max 97 SE"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4">
                <div className="flex">
              <h3 className="font-medium text-lg pl-11">Nike Air Max 97 SE</h3>
              <p className="font-bold mt-1 pl-11">₹ 16,995</p>
              </div>
              <p className="text-gray-500 text-sm pl-11">Men's Shoes</p>
              
            </div>
          </div>
        </div>
      </div>

      {/* New Section (from Uploaded Image) */}
      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/Jogging.png" // Replace with your image path
            alt="Running Man"
            width={1200}
            height={600}
            className="rounded-lg mx-auto"
          />
          <h1 className="mt-8 text-4xl  text-gray-900">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Cause everyone should know the feeling of running in that perfect
            pair!
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>

      {/* Gear Up Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl  text-gray-900 mb-12 text-left">Gear Up</h2>
          
          {/* Shop Men's and Women's with Arrows */}
          <div className="flex justify-between mb-8">
            {/* Shop Men's Section */}
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-gray-900 ml-96">Shop Men</h2>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                
              <svg xmlns="http://www.w3.org/2000/svg" width="16px"  fill="#fff" className="inline" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>

              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                   
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#fff" className="inline" viewBox="0 0 492.004 492.004">
          <path
            d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
            data-original="#000000" />
        </svg>



              </button>
            </div>
            
            {/* Shop Women's Section */}
            <div className="flex items-center">
              <h2 className="text-1xl font-bold text-gray-900">Shop Women</h2>
              <button className="p-2 bg-gray-300 rounded-full flex items-center  ml-2"> 

              <svg xmlns="http://www.w3.org/2000/svg" width="16px"  fill="#fff" className="inline" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>

              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center  ml-2">
                
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#fff" className="inline" viewBox="0 0 492.004 492.004">
          <path
            d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
            data-original="#000000" />
        </svg>


              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-12">
            {/* Men's Section */}
            <div className=" flex flex-col items-center">
              <Image src="/main1.png" alt="Men's Top" width={300} height={300} className="rounded-lg" />
              <div className="flex justify-between">
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV TechKnit</p>
              <p className="text-gray-700 font-medium mt-4">₹ 3,895</p>
              </div>
              <p className="text-gray-500">Men's Short Sleeve</p>
              <p className="text-gray-500"> Running Top</p>
              
            </div>
            <div className=" flex flex-col items-center">
              <Image src="/main2.png" alt="Men's Shorts" width={300} height={300} className="rounded-lg" />
              <div className="flex justify-between">
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT Challenger</p>
              <p className="text-gray-700 font-medium mt-4">₹ 2,495</p>
              </div>
              <p className="text-gray-500">Men's 18cm (approx.) 2-</p>
              <p className="text-gray-500"> in-1 Versatile Shorts</p>

              
            </div>
            <div className=" flex flex-col ">
              <Image src="/main3.png" alt="Women's Top" width={300} height={300} className="rounded-lg" />
              <div className="flex justify-between">
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV </p>
              <p className="text-gray-700 font-medium mt-4">₹ 5,295</p>
              </div>
              <p className="text-gray-500">Women's Long Sleeve</p>
              <p className="text-gray-500"> Running Top</p>
              
            </div>
            <div className=" flex flex-col ">
              <Image src="/main4.png" alt="Women's Leggings" width={300} height={300} className="rounded-lg" />
              <div className="flex justify-between">
              <p className="text-gray-700 font-medium mt-4">Nike Fast</p>
              <p className="text-gray-700 font-medium mt-4">₹ 3,795</p>
              </div>
              <p className="text-gray-500">Women's Mid Rise 7/8 Running</p>
              <p className="text-gray-500"> Leggings With Pockets</p>

            </div>
          </div>
        </div>

        <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left font-sans">Gear Up</h2>

          <div className="w-screen bg-gray-100">
      {/* Fullscreen Sneaker Image */}
      <div className="relative w-[1280px] h-screen ">
        <Image
          src="/main5.png" // Replace with the actual image in the public folder
          alt="Sneaker"
          layout="fill"
          objectFit="cover" // Ensures the image fills the entire screen
          objectPosition="center" // Centers the image
          
        />
      </div>
       
        </div>
        </div>
        </div>
        <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
        
          <h1 className="font-helvetica text-[52px]  leading-[60px] text-center  underline ">
            Flight Essentials
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Your buit to last all weeks wears-but with style only Joran Brand can deliver
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop
          </button>
        </div>
      </div>

      {/* Product Section */}
<div className="flex flex-col items-center justify-center min-h-screen bg-white">
  {/* Fullscreen Product Image */}
  <Image
    src="/main6.png" // Replace with actual image path
    alt="Nike Air Max Pulse"
    layout="intrinsic"
    width={1200} // Increased width for a larger image
    height={1200} // Increased height for a larger image
    className="object-contain"
  />


</div>

<footer className="bg-white py-8 w-full">
  {/* Footer Links Section */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center pl-12 pr-12  ml-4">
    {/* Column 1 */}
    <div>
      <h3 className="font-bold mb-4">Icons</h3>
      <ul className="space-y-2">
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>
    {/* Column 2 */}
    <div>
      <h3 className="font-bold mb-4">Shoes</h3>
      <ul className="space-y-2 ">
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>
    {/* Column 3 */}
    <div>
      <h3 className="font-bold mb-4">Clothing</h3>
      <ul className="space-y-2 ">
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>
    {/* Column 4 */}
    <div className="text-">
      <h3 className="font-bold mb-4">Kid</h3>
      <ul className="space-y-2 ">
        <li>Infant & Toddler Shoes</li>
        <li>Kid's Shoes</li>
        <li>Kid's Jordan Shoes</li>
        <li>Kid's Basketball Shoes</li>
      </ul>
    </div>
  </div>

  {/* Bottom Section */}
    
  
</footer>

</div>
</div>
</>
    
  );
}