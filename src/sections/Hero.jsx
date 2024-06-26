import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics, shoes } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useEffect, useState } from "react"



const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)


  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-transparent xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray font-monserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center animate-fade-up animate-once">

        <img
          src={bigShoeImg}
          alt="Shoe Collection "
          width={610}
          height={500}
          className="object-contain relative z-10"
         
        />
        <div className="flex absolute sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div className="hover:scale-110 transition-transform ">
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImage={bigShoeImg}
        
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero