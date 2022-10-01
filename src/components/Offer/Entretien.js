import React from 'react'

export default function Entretien(props) {
  return (
    <div className="border-top border-2 mt-5 pt-5 text-center">
        <p>
            <em>
            <strong>
                {props.text1}
            </strong>
            </em>
        </p>
        <p>
            <a href={"tel:" + props.numero2}>{props.numero1}</a>
        </p>
        <p>
            <a href={"mailto:" + props.mail}>{props.mail}</a>
        </p>
    </div>
  )
}
