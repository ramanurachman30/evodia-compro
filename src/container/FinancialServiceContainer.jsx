import React, {Component} from 'react'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import finance_img from '../assets/image/financial_services_img.png'

class FinancialServicesContainer extends Component {
    state = { 
        img: finance_img,
        title:'Finance Service',
        desc: "We provide banking and finance solution to ensure our solution will help pur customers operational efficiently and effectiveness. \n\nWe have developed partnership and alliances to maximize its own individual strengths in implementing IT Banking and Finance solution that will benefit the business today and i the future",
            
     } 

    render() { 
        return (
            <div>
                <OurBusinessPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default FinancialServicesContainer;