import React from 'react'

export default function Subtitle(props) {
  return (
    <div id="subtitle" className="d-flex mb-4">
                <strong className="font-italic font-weight-bold"><em>
                    {props.text}<br/>{props.intro}
                    </em>
                </strong>
    </div>
  )
}
