import React from 'react'

class Title extends React.Component {
  componentDidMount () {
    document.title = this.props.children
  }

  render () {
    return null
  }
}

export default Title
