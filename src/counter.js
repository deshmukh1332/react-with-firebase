import React from 'react'

class Counter extends React.Component {
  state = {
    count: this.props.count || 0
  }

  updateCount = increment => {
    const { count } = this.state

    if (increment) {
      this.setState({
        count: count + 1
      })
    } else {
      this.setState({
        count: count - 1
      })
    }
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <p>The current count is {count}</p>
        <button onClick={() => this.updateCount(true)}>Increment</button>
        <button onClick={() => this.updateCount(false)}>Decrement</button>
      </div>
    )
  }
}

export default Counter