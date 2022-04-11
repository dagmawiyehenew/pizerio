import React from 'react'
import HeaderWithBanner from './headers/headerWithBanner'   
export default function Header(props) {

  return (
    <div>
      <HeaderWithBanner 
          title={props.title}
          subtitle={props.subtitle}
          cta={props.cta}
      />
    </div>
  )
}
