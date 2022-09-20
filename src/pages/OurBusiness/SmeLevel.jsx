import React, {Component} from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/NavbarComp';
import SmeLevelContainer from '../../container/SmeLevelContainer';

class SmeLevel extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <SmeLevelContainer/>
                <Footer/>
            </div>
        );
    }
}
 
export default SmeLevel;