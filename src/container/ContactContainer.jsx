import React, {Component} from 'react';
import Map from '../assets/image/map.png';
import Location from '../assets/icon/location.svg';
import Phone from '../assets/icon/phone.svg';
import ContactComp from '../component/ContactComp';

class ContactContainer extends Component {
    state = {}
    render() {
        const dataMap = [
            {
                img: Map,
                icon1: Location,
                icon2: Phone,
                title: "Contact Us",
                desc1: "Bellezza BSA 1st Floor SA1-06 Jl. Letjen Soepono, Permata hijau Jakarta Selatan, DKI Jakarta",
                desc2: "(021) 50645040"
            }
        ].map( ({img, icon1, icon2, title, desc1, desc2}) => {
            return <ContactComp title={title} img={img} icon1={icon1} icon2={icon2} desc1={desc1} desc2={desc2} />
        })
        return (
          <div className="p-20">
            <div className="grid grid-cols-2 gap-6">
                {dataMap}
            </div>
          </div>
        )
    }
}

export default ContactContainer