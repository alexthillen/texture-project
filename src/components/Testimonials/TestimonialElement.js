import React, { Component } from 'react'

class TestimonialElement extends Component {

    renderName() {
        var elem;
        if (this.props.name !== "") {
            elem = <div className="link-name d-flex justify-content-center">{this.props.name}</div>;
        }
        return elem;
    }

    renderCompany() {
        var elem;
        if (this.props.companyName !== "") {
            elem = <div className="link-position d-flex justify-content-center">{this.props.companyName}</div>;
        }
        return elem;
    }

    render() {
        return <div className="col-md-4 style-3">
            <div className="tour-item ">
                <div className="tour-desc bg-white">
                    <div className="tour-text color-grey-3 text-center">{(this.props.lang === "fr") ? "«" : "“"}{this.props.quote}{(this.props.lang === "fr") ? "»" : '”'}</div>
                    <div className="d-flex justify-content-center pt-2 pb-2">
                        <img className="tm-people" src={(this.props.img === "") ? "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMjMqx5qbVU6ynPCnL6ySJOw-aykkOpN-x1gkr4qmU6R8bPam1" : this.props.img} alt=""></img>
                    </div>
                    {this.renderName()}
                    {this.renderCompany()}
                </div>
            </div>
        </div>
    }
}

export default TestimonialElement