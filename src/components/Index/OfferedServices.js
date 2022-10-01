import React, { Component } from 'react';
import SingleOfferedService from './SingleService';
import {fr_header2_service_01, fr_header2_service_02, de_header2_service_01, de_header2_service_02} from 'static/texts';
import "./SingleService.scss"
import "./OfferedServices.scss"
import image1 from "../../static/traduction-downsampled.jpg"
import image2 from "../../static/coaching-downsampled.jpg"


class OfferedServices extends Component {
    


    render() {
        return <div className="w-100 h-auto">
            <div className="d-flex row align-items-stretch m-md-1">
            <SingleOfferedService id="1" lang={this.props.lang} heading={this.props.lang === "fr" ? fr_header2_service_01 : de_header2_service_01 }>
                <div className='img1'>
                    <img src={image1} alt="Traduction" className='w-100 h-100 rounded'></img>
                </div>
            </SingleOfferedService>
            <SingleOfferedService id="2" lang={this.props.lang} heading={this.props.lang === "fr" ? fr_header2_service_02 : de_header2_service_02 }>
            <div className='img1'>
                    <img src={image2} alt="Traduction" className='w-100 h-100 rounded'></img>
                </div>
            </SingleOfferedService>
            </div>
        </div>
    }
}

export default OfferedServices;