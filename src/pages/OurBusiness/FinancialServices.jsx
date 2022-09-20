import React, {Component} from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/NavbarComp';
import FinancialServicesContainer from '../../container/FinancialServiceContainer';

class FinancialServises extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <FinancialServicesContainer/>
                <Footer/>
            </div>
        );
    }
}
 
export default FinancialServises;