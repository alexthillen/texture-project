import React, { Component } from 'react';
import SingleOfferedService from './SingleService';
import { fr_header2_service_01, fr_header2_service_02, de_header2_service_01, de_header2_service_02 } from 'static/texts';
import "./SingleService.scss"
import "./OfferedServices.scss"
import image1 from "../../static/traduction-downsampled.jpg"
import image2 from "../../static/coaching-downsampled.jpg"


class OfferedServices extends Component {



    render() {
        return <div className="h-auto mx-md-3">
            <div className="d-flex row align-items-stretch mx-0">
                <SingleOfferedService id="1" lang={this.props.lang} heading={this.props.lang === "fr" ? fr_header2_service_01 : de_header2_service_01} className={"lg-mr-1_5"}>
                    <div className='img1'>
                        <img src={image1} alt="Traduction" className='w-100 h-100 rounded'></img>
                    </div>
                </SingleOfferedService>
                <SingleOfferedService id="2" lang={this.props.lang} heading={this.props.lang === "fr" ? fr_header2_service_02 : de_header2_service_02} className={"lg-ml-1_5 md-mt-3 lg-mt-0"} >
                    <div className='img1'>
                        <img src={image2} alt="Traduction" className='w-100 h-100 rounded'></img>
                    </div>
                </SingleOfferedService>
            </div>
        </div>
    }
}

export default OfferedServices;