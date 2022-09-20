import React,{Component} from 'react';
import partner_img from "../assets/image/partner.png"
import microstrategy_img from "../assets/icon/microstrategy-logo.svg"
import oracle_img from "../assets/icon/oracle-logo.svg"
import pentaho_img from "../assets/icon/pentaho-logo.svg"
import postgresql_img from "../assets/icon/postgresql-logo.svg"
import vmware_img from "../assets/icon/vmware-logo.svg"


class Partner extends Component {
    state = {  } 
    render() { 
        return (
            <div className='bg-center bg-cover bg-no-repeat text-center' style={{ backgroundImage:`url(${partner_img})`}}>
                <div className='bg-white/70 py-16'>
                    <p className='text-4xl font-bold py-3' data-aos="fade-down">We are Not Alone</p>
                    <p className='text-3xl font-light' data-aos="fade-down">Along the journey, we create an amazing experience together <br /> with our partner</p>
                    <div className='flex flex-col justify-center items-center py-20'>
                        <div className="grid grid-cols-3 gap-24">
                            <img src={microstrategy_img} alt="img_1" data-aos="fade-right" data-aos-duration="2000"/>
                            <img src={oracle_img} alt="img_2" data-aos="fade-right" data-aos-duration="1500"/>
                            <img src={pentaho_img} alt="img_3" data-aos="fade-right" data-aos-duration="1000"/>
                        </div>
                        <div className='grid grid-cols-2 pt-10 gap-24'>
                            <img src={postgresql_img} alt="img_4" data-aos="fade-right" data-aos-duration="2000"/>
                            <img src={vmware_img} alt="img_5" data-aos="fade-right" data-aos-duration="1000"/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default Partner;