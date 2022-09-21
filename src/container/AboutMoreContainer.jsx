import React, { Component } from 'react';
import AboutReadMore from '../assets/image/about-more.png';
import Grey from '../assets/image/grey.png';
import Aos from 'aos';

class AboutMoreContainer extends Component {
  render(){
    const aboutMore = {
        title: 'About Us',
        subtitle: 'PT Evodia Nika Teknologi',
        desc: 'Is a system integrator company with super dedication and knowledge and technical capability. With numerous backgrounds in IT industry, system inegrator and IT consultant, our people have profound experience in the world of Information Technology. Despite the background from which our people enbark on, we all have one sole mission and vission to assist our customer in software/application innovation.',
        image: AboutReadMore,
      }
    Aos.init({});
    return (
      <section>
        <div className="grid grid-cols-2">
          <div className="pt-32" data-aos="fade-up" data-aos-duration="3000">
            <h2 className="px-20 text-left font-semibold text-xl">{aboutMore.title}</h2>
            <h2 className="px-12 relative left-6 text-[#3789E5] text-5xl font-bold my-3">{aboutMore.subtitle}</h2>
            <p className="text-justify text-xl pl-20 -tracking-tighter">{aboutMore.desc}</p>
          </div>
          <div className="pt-32">
            <div className="">
              <img className="absolute right-0 top-36" src={aboutMore.image} alt="" data-aos="fade-up" data-aos-duration="3000" />
              <span className="absolute top-20 -z-10 right-0">
                <img src={Grey} alt="" />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMoreContainer;
