import React from "react";

const Home = () => {
  const products = [





    {
      title: "Nike Air Force 1 Mid '07",
      price: "₹ 10,795.00",
      category: "Men's Shoes",
      imgSrc: "All1 .png",
    },
    {
      title: "Nike Court Vision Low Next Nature",
      price: "₹ 4,995.00",
      category: "Men's Shoes",
      imgSrc: "/All2.png",
    },
    {
      title: "Nike Air Force 1 PLT.AF.FORM",
      price: "₹ 8,695.00",
      category: "Women's Shoes",
      imgSrc: "/Rectangle (1).png  ",
    },
    {
      title: "Nike Air Force 1 React",
      price: "₹ 13,295.00",
      category: "Men's Shoes",
      imgSrc: "/All4.png",
    },
    {
      title: "Air Jordan 1 Elevate Low",
      price: "₹ 9,495.00",
      category: "Women's Shoes",
      imgSrc: "/All5.png",
    },
    {
      title: "Nike Standard Issue",
      price: "₹ 3,695.00",
      category: "Women's Basketball Jersey",
      imgSrc: "/All6.png",
    },

     
      {
        title: "Nike Revolution 6 Next Nature",
        price: "₹ 6,795.00",
        category: "Unisex Shoes",
        imgSrc: "/All7.png",
      },
      {
        title: "Air Jordan 1 Mid",
        price: "₹ 11,295.00",
        category: "Men's Shoes",
        imgSrc: "/All8.png",
      },
      {
        title: "Nike Air Zoom Pegasus 40",
        price: "₹ 10,495.00",
        category: "Women's Shoes",
        imgSrc: "/All9.png",
      },
      {
        title: "Nike React Infinity Run Flyknit 3",
        price: "₹ 14,295.00",
        category: "Men's Running Shoes",
        imgSrc: "/All10.png",
      },
      {
        title: "Nike Blazer Mid '77",
        price: "₹ 7,995.00",
        category: "Unisex Shoes",
        imgSrc: "/All11.png",
      },
      {
        title: "Nike Dunk Low Retro",
        price: "₹ 8,995.00",
        category: "Men's Sneakers",
        imgSrc: "/All12.png",
      },
      {
        title: "Nike Air VaporMax Plus",
        price: "₹ 19,995.00",
        category: "Unisex Shoes",
        imgSrc: "/All13.png",
      },
      {
        title: "Nike Zoom Fly 5",
        price: "₹ 15,495.00",
        category: "Men's Running Shoes",
        imgSrc: "/All14.png",
      },
      {
        title: "Nike Metcon 8",
        price: "₹ 11,995.00",
        category: "Training Shoes",
        imgSrc: "/All15.png",
      },
      {
        title: "Nike Free Run 5.0",
        price: "₹ 9,495.00",
        category: "Women's Running Shoes",
        imgSrc: "/All16.png",
      },
      {
        title: "Nike Air Max 97",
        price: "₹ 17,495.00",
        category: "Unisex Shoes",
        imgSrc: "/All17.png",
      },
      {
        title: "Nike LeBron 21",
        price: "₹ 18,995.00",
        category: "Men's Basketball Shoes",
        imgSrc: "/All18.png",
      },
      {
        title: "Nike Phantom GT2 Academy",
        price: "₹ 6,795.00",
        category: "Men's Football Shoes",
        imgSrc: "/All19.png",
      },
      {
        title: "Nike Tiempo Legend 9 Academy",
        price: "₹ 5,995.00",
        category: "Women's Football Shoes",
        imgSrc: "/All20.png",
      },
      {
        title: "Nike Air Jordan 4 Retro",
        price: "₹ 19,995.00",
        category: "Men's Sneakers",
        imgSrc: "/All15.png",
      },
      {
        title: "Nike Kyrie Flytrap 6",
        price: "₹ 9,495.00",
        category: "Men's Basketball Shoes",
        imgSrc: "/All13.png",
      },
      {
        title: "Nike SB Dunk Low",
        price: "₹ 11,995.00",
        category: "Unisex Shoes",
        imgSrc: "/All9.png",
      },
      {
        title: "Nike ZoomX Invincible Run Flyknit 3",
        price: "₹ 14,995.00",
        category: "Men's Running Shoes",
        imgSrc: "/All7.png",
      },
      {
        title: "Nike Air Huarache",
        price: "₹ 10,495.00",
        category: "Unisex Shoes",
        imgSrc: "/All19.png",
      },
      {
        title: "Nike Air Max Plus",
        price: "₹ 13,995.00",
        category: "Men's Shoes",
        imgSrc: "/All17.png",
      },
      {
        title: "Nike Air Force 1 Shadow",
        price: "₹ 11,495.00",
        category: "Women's Shoes",
        imgSrc: "/All1 .png",
      },
      {
        title: "Nike SB Blazer Mid",
        price: "₹ 8,495.00",
        category: "Unisex Shoes",
        imgSrc: "/All5.png",
      },
      {
        title: "Nike Air Max Pre-Day",
        price: "₹ 9,995.00",
        category: "Men's Sneakers",
        imgSrc: "/All12.png",
      },
      {
        title: "Nike Air Zoom Structure 24",
        price: "₹ 12,995.00",
        category: "Men's Running Shoes",
        imgSrc: "/All7.png",
      },
      
    ];
    


  return (
    <div className="flex flex-col md:flex-row">




      {/* Sidebar */}






      <div className="w-full md:w-1/4 bg- p-4">
      
      

      <img src="Frame (16).png" height="400.72px" width="192px"/>
      
      <hr className="my-6" />
        <div>
          <div className="space-y-9"></div>
          <h3 className="font-medium mb-2">Gender</h3>
          <div className="space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" /> Men
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Women
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Unisex
            </label>
          </div>
        </div>
        <hr className="my-6" />


        <div>
<h3  className="font-medium mb-2">Kids</h3>
<div className="space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" /> Boys
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Girl
            </label>
            
          </div>

        </div>


        <hr className="my-6" />


        <div>
<h3  className="font-medium mb-2">Shop By Price</h3>
<div className="space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" />   Under ₹ 2 500.00
              
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> ₹ 2 501.00 - ₹ 7 500.00
            </label>
            
          </div>

        </div>

</div>






      {/* Product Grid */}
      <div className="w-full md:w-3/4 p-4">
      
        <h1 className="text-xl font-bold mb-8">New (500)</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm"
            >

             
<img
                src={product.imgSrc}
                alt={product.title}
                className="w-full h-64 object-cover"
              />


              <div className="p-4">
                <h3 className="font-bold text-md">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="font-bold text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
