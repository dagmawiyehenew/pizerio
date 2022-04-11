import React from 'react'
import CardDefault from '../../components/cards/default'

export default function LayoutHeader(props) {

  return (
    <div>
      <CardDefault 
          title={props.name}
          subtitle={props.subtitle}
          content={props.content}
      />
    </div>
  )
}