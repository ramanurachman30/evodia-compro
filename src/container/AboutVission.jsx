import React, { Component } from 'react';
import Puzzle from '../assets/image/puzzle.png';
import Aos from 'aos';

class AboutVission extends Component{
    render(){
        const images ={
            image:Puzzle,
        }
        const vission = {
            title:"Our Vission",
            desc:"To create an amazing experience for your business transformation."
        }
        const mission = {
            title:"Our Mission",
            list1:"Implement agile model to support business changes and speed development",
            list2:"Deliver enterprise class application to enable digitalization of business"
        }
        Aos.init({});
        return (
          <div className="bg-[#3789E5]">
            <div className="grid grid-cols-2">
              <div className="pt-10">
                <div className="py-12 px-12" data-aos="fade-up" data-aos-duration="1000">
                  <img src={images.image} alt="" />
                </div>
              </div>
              <div className="pt-10">
                <div className="" data-aos="fade-up" data-aos-duration="2000">
                  <h1 className="text-5xl text-white font-semibold text-left relative top-20">{vission.title}</h1>
                  <h1 className="text-white text-left tracking-wide py-24 text-2xl">{vission.desc}</h1>
                </div>
                <div className="relative bottom-12" data-aos="fade-up" data-aos-duration="3000">
                  <h1 className="text-5xl text-white font-semibold text-left relative bottom-5">{mission.title}</h1>
                  <ul class=" text-left list-disc list-outside text-white py-{-2rem} px-6 text-2xl">
                    <li>{mission.list1}</li>
                    <li>{mission.list2}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
};

export default AboutVission