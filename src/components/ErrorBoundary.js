import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    // tämä päivittää tilan, jolloin näytetään virheilmoitus
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // tänne voi halutessa logittaa virheitä
    console.error("Virhe:", error)
    console.error("Virheen tiedot:", info)
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oho! Jokin meni pieleen. Yritä myöhemmin uudelleen.</h2>
    }
    return this.props.children
  }
}

export default ErrorBoundary
