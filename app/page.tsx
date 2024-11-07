import React from "react";
import Header from "./components/Header/Header"
import Image from "next/image";


 const Home=()=>{
  return(
    <div className="h-screen "> 
    <Header /> 
    <div className="flex gap-24 " >
      <div className="w-1/2 flex-1 flex-col justify-center items-start ">

      <h1 className="w-[496px] h-[189px] text-[40px] font-libre-Bodoni mt-[120px] ml-[176px] ">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

      <p className="text-[29.24px] w-[902px] h-[147px] ml-[171px] "> An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
      <button className="p-[8.6px] w-[288px] h-[58px] r-[8.2px] gap-[10px] top-[730px] ml-[176px] bg-[#A29875] text-[#FFFFFF] font-bold">Explore Now</button>
      </div><br/>
      <div className="w-1/2 flex justify-center items-center mt-[28px] ml-[24px]  mr-[98px] ">
      <Image
        src={"/image/girl-image.svg"}
        alt="hero image"
        width={442}
        height={611}
        
        />
        </div>

    </div>


    </div>
  )
 };
 export default Home;

