import React, {Component} from 'react';
import BusinessCardComp from '../component/BusinessCardComp';
import finance_img from '../assets/icon/financial-services.png';
import enterprise_img from '../assets/icon/enterprise_img.png';
import sme_img from '../assets/icon/sme_img.png';
import db_middle_img from '../assets/icon/db_middle_img.png';

class OurBusiness extends Component {
    state = { } 
    render() { 
        const data = [
            {
                img: finance_img,
                title:'Finance Services',
                desc: "We provide banking and finance solution to ensure our solution will help our customer",
                duration: 1000
            },
            {
                img: enterprise_img,
                title:'Enterprise Level',
                desc: "Enterprise level businesses are always a significant consideration every decision making",
                duration: 1500
            },
            {
                img: sme_img,
                title:'SME Level',
                desc: "We aim to support small and medium enterprise level to achieve faster growth in technology aspect",
                duration: 2000
            },
            {
                img: db_middle_img,
                title:'Database & Middleware',
                desc: "A well-integrated solutions framework and its implementation to support your business",
                duration: 2500
            },

        ].map( ({img, title, desc, duration}) => {
            return <BusinessCardComp key={title} img={img} title={title} desc={desc} duration={duration}/>
        })
        return (
            <div className="p-20">
                <p className='text-4xl font-bold text-[#3789E5] text-center py-20' data-aos="fade-down" data-aos-duration="2000">Our Business Solution</p>
                <div className="grid grid-cols-4 gap-6">
                    {data}
                </div>
            </div>
        );
    }
}
 
export default OurBusiness;