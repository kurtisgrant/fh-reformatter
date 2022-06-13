import React from 'react'

function Header(props) {
  let title = props.items.length > 1 ? 'Trade Confirmations' : 'Trade Confirmation'
  if (props.processedBy.length > 0) {
    title += ` - Processed by ${props.processedBy}`
  }

  return (
    <h2>{title}</h2>
  )
}

export default Header