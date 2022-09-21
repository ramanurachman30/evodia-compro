import React, { Component } from 'react';

class GetStarted extends Component {
  render() {
    const mulai = {
      title: "Let's get started",
      desc: 'Are you ready for a better, more productive business?',
    };
    return (
      <section className="bg-[#3789E5] py-36 text-center">
        <div className="text-white flex flex-col gap-10">
          <p className="text-3xl font-mono" data-aos="fade-up" data-aos-duration="2000">
            {mulai.title}
          </p>
          <p className="text-7xl font-bold" data-aos="fade-up" data-aos-duration="3000">
            {mulai.desc}
          </p>
          <div data-aos="fade-up" data-aos-duration="4000">
            <a href="/" className="text-base font-semibold py-2 px-5 text-white border-2 border-yellow-400 hover:bg-yellow-400 hover:text-[#3789E5] rounded-lg">
                Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default GetStarted;