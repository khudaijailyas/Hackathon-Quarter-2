export default function Footer(){
    return(
        <>
        <div>
        <footer className="bg-black py-12 px-12 font-sans  flex w-[1280px] h-[331px]">
      <div className="grid max-md:grid-cols-1 max-xl:grid-cols-3 xl:grid-cols-5 xl:gap-20 max-xl:gap-8">
        

        <div className="w-[245px] h-[169px]">
          <h4 className="text-lg mb-6 text-white">FIND A STORE</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">BECOME A MEMBER
              </a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">SIGN UP FOR EMAIL
              </a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">Send Us feedback 
              </a></li>
            <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">STUDENT DISCOUNT</a></li>
          </ul>
        </div>

        <div className="w-[245px] h-[210px]">
          <h4 className="text-lg mb-6 text-white">GET HELP</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-white text-sm">Order Status</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-white text-sm">Delivery</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-white text-sm">Return</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-white text-sm">Payment Option</a></li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-white text-sm">Contact Us At Nike.com Inquiries</a></li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-white text-sm">Contact Us On All Other Inquiries</a></li>
            
          </ul>
        </div>

        <div className="w-[145px] h-[148px]">
          <h4 className="text-lg mb-6 text-white">ABOUT NIKE</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-white text-sm">News</a>
            </li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-white text-sm">Carriers</a></li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-white text-sm">Inverstors</a></li>
            <li><a href="javascript:void(0)" className="text-gray-500 hover:text-white text-sm">Sustainibility</a></li>
          </ul>
        </div>
      </div>
      

      
      <div className="flex w-[337px] h-[37px] gap-4">
        <img src="twitter.png" alt="" className="h-[30px] w-[30px]" />
        <img src="facebook.png" alt="" className="h-[30px] w-[30px]"/>
        <img src="youtube.png" alt="" className="h-[30px] w-[30px]"/>
        <img src="insta.png" alt="" className="h-[30px] w-[30px]"/>
      </div>
      
        </footer>
        <div className="flex w-[1280px] h-[92px] bg-black text-gray-500 justify-between ">
         <div className="flex mt-[20px]">
            <img src="location.png" alt="" className="h-[15px] w-[18px] m-[5px]" />
            <p>India</p>
         </div>
         <p className="mr-[500px] mt-[20px]">© 2023 Nike, Inc. All Rights Reserved</p>
         <ul className="flex gap-4 mt-[20px]">
            <li>Guides</li>
            <li>Terms of Sales</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
         </ul>
      </div>   
      </div>     
        </>
    )
}