import React, { Fragment, Component } from 'react'
import Footer from '../component/Footer';
import Navbar from '../component/NavbarComp';


class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Navbar />
                {/* <ContactComp/> */}
                {/* <ContactContainer/> */}
                <Footer />
            </Fragment>
        );
    }
}
 
export default Contact;