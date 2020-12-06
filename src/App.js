import React from 'react'
import Season from './Season'

class App extends React.Component {
  state = { lat: '', err: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (success) => this.setState({ lat: success.coords.latitude }),
      (err) => this.setState({ err: err.message })
    )
  }

  render() {
    if (this.state.lat && !this.state.err) {
      return <Season lat={this.state.lat} />
    } else if (this.state.err && !this.state.lat) {
      return <p>Err</p>
    }

    return <p>Please accept</p>
  }
}

export default App
