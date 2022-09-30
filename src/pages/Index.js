import Main from 'layout/Main'
import React from 'react'
import IndexBundle from 'components/Index/IndexBundle'


export default function Index(props) {
  console.log("props index " + props);
  return (
    <Main title="Home" description="" 
// @ts-ignore
    lang={props.lang}><IndexBundle lang={props.lang}></IndexBundle></Main>
  )
}
