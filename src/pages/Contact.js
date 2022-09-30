import Main from 'layout/Main'
import React from 'react'

export default function Contact(props) {
  return (
    <Main title="test" description="test" 
    // @ts-ignore
    lang={props.lang}>Index</Main>
  );
}
