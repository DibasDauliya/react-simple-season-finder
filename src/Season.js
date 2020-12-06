import React from 'react'

export default function Season(props) {
  const month = new Date().getMonth()

  if (month > 2 && month < 9) {
    return props.lat > 0 ? 'summer' : 'winter'
  } else {
    return props.lat > 0 ? 'winter' : 'summer'
  }

  //   return <div>latiude is: {props.lat}</div>
}

Season.defaultProps = {
  lat: 'hihi'
}
