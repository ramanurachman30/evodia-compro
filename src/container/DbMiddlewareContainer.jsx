import React, {Component} from 'react';
import db_middleware_img from '../assets/image/db_middleware_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class DbMiddlewareContainer extends Component {
    state = { 
        img: db_middleware_img,
        title:'Database & Middleware',
        desc: "A well-integrated solutions framework and it’s implementation to support your business are provided such as Data warehouse, Business Intelligence, Middleware. \n\nWe are providing Oracle, PostgreSQL, SQL, Server and My SQL with 24/7 support from our team.",
    } 
    render() { 
        return (
            <div>
                <OurBusinessPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default DbMiddlewareContainer;