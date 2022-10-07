import React from 'react'
import "social_media/SocialMedia.scss"


export default function Linkedin(props) {
  return (
    <div><a className="btn-social btn-social-icon btn-social-linkedin" href={props.href}><i className="fa fa-linkedin"></i><span>LinkedIn</span></a>
    </div>
  )
}
