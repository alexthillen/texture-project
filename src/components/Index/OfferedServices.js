import React, { Component } from 'react';
import SingleOfferedService from './SingleService';
import {fr_header2_service_01, fr_header2_service_02, de_header2_service_01, de_header2_service_02} from 'static/texts';
import "./SingleService.scss"
import "./OfferedServices.scss"
import image1 from "./traduction.jpg"


class OfferedServices extends Component {
    


    render() {
        return <div className="w-100 h-auto">
            <div className="d-flex row align-items-stretch m-md-1">
            <SingleOfferedService lang={this.props.lang} heading={this.props.lang === "fr" ? fr_header2_service_01 : de_header2_service_01 }>
                <div className='img1'>
                    <img src={image1} alt="Traduction"></img>
                </div>
            </SingleOfferedService>
            <SingleOfferedService lang={this.props.lang} heading={this.props.lang === "fr" ? fr_header2_service_02 : de_header2_service_02 }></SingleOfferedService>
            </div>
        </div>
    }
}

export default OfferedServices;