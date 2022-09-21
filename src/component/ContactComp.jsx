import React from 'react';

const ContactComp = (props) => {
  return (
    <div className="flex justify-center">
      <div className="justify-start">
        <img src={props.img} alt="" className='w-[70rem]' />
      </div>
      <div className="justify-end">
        <p className="text-4xl font-semibold text-[#3789E5]">{props.title}</p>
        <div className="flex justify-end">
          <img src={props.icon1} alt="" width={30} />
          <p className="text-sm tracking-normal">{props.desc1}</p>
        </div>
        <div className="flex p-2">
          <img src={props.icon2} alt="" width={30} />
          <p className="text-sm tracking-normal">{props.desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
