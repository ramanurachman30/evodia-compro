import React, {Component} from 'react';
import sme_img from '../assets/image/sme_level_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class SmeLevelContainer extends Component {
    state = { 
        img: sme_img,
        title:'SME Level',
        desc: "We aim to support small and medium enterprise level to achieve faster growth in technology aspect by providing solution that meets customer’s budget",
     } 
    render() { 
        return (
            <div>
                <OurBusinessPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default SmeLevelContainer;