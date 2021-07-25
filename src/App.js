import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout((_ => this.setState({ isLoading: false }) ), 2000)
  }
  ;
  componentDidUpdate() {
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <div>{isLoading? "Loading...":"We are ready"}</div>
      </div>
    )
  }
}

export default App;
