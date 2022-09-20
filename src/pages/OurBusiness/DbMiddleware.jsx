import React, {Component} from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/NavbarComp';
import DbMiddlewareContainer from '../../container/DbMiddlewareContainer';

class DbMiddleware extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <DbMiddlewareContainer/>
                <Footer/>
            </div>
        );
    }
}
 
export default DbMiddleware;