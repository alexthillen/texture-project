import React from 'react'

export default function Subtitle(props) {
  return (
    <div id="subtitle" className="d-flex">
        <div className="col-md-2"></div>
            <div className="col-md-8">
                <h6 className="text-center pb-4">
                    {props.text}
                </h6>
            </div>
    </div>
  )
}
