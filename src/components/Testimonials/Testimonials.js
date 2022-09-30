import React, { Component } from 'react'
import testimonials from "./MockTestimonials"
import TestimonialElement from './TestimonialElement'

class Testimonial extends Component {
    renderTestimonialElements() {
        var toRender = [];
        for (let i = 0; i < testimonials.length; i++) {
            let el = <TestimonialElement key={i}
            name = {(this.props.lang === "fr")? testimonials[i].name_fr: testimonials[i].name_de}
            companyName = {testimonials[i].companyName}
            lang = {this.props.lang}
            quote = {(this.props.lang === "fr")? testimonials[i].quote_fr: testimonials[i].quote_de}
            img = ""
            ></TestimonialElement>;
            toRender.push(el);
        }
        return toRender;
    }

    render() {
        return <section className="home-testimonial ">
            <div className="row d-flex justify-content-center testimonial-pos">
                <div className="col-md-12 d-flex justify-content-center">
                    <h2>{(this.props.lang === 'fr') ? "Ce que nos clients disent a propos de nos services": "Was unsere Kunden sagen"}</h2>
                </div>
            </div>
            <section className='home-testimonial-bottom'>
            <div className="container testimonial-inner">
            <div className="row d-flex justify-content-center">
                {this.renderTestimonialElements()}
            </div>
            </div>
            </section>
        </section>
    }
}

export default Testimonial;