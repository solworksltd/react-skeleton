import React from 'react';

import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Container>
        <Header as='h1'>Hello React Skeleton</Header>
      </Container>
    );
  }
}

export default App;
