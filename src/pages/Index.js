import Main from 'layout/Main'
import React from 'react'

export default function Index(props) {
  return (
    <Main title="test" description="test" 
// @ts-ignore
    lang={props.lang}>Index</Main>
  )
}
