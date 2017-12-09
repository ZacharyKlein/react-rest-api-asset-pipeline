import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      serverInfo: null
    }
  }

  componentDidMount() {
    fetch('/application')
      .then(r => r.json())
      .then(json => this.setState({serverInfo: json}))
      .catch(error => console.error('Error connecting to server: ' + error));

  }

  render() {
    const serverInfo = this.state.serverInfo;

    console.log(serverInfo);
    return (
      <div>
        {serverInfo ? <div>
          <h1>Application Status</h1>
          <ul>
            <li>Message: {serverInfo.message}</li>
            <li>Environment: {serverInfo.environment}</li>
            <li>App version: {serverInfo.appversion}</li>
            <li>Grails version: {serverInfo.grailsversion}</li>
            <li>Groovy version: {serverInfo.groovyversion}</li>
            <li>JVM version: {serverInfo.jvmversion}</li>
            <li>App Profile: {serverInfo.approfile}</li>
          </ul>
        </div> : <h1>Loading...</h1>}

      </div>
    );
  }
}

export default App;
