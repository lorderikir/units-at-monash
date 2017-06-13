import React from 'react';
import Expo from 'expo';
import { StyleSheet, View } from 'react-native';
import { Container, Content, ListItem, Text, CheckBox, Header } from 'native-base';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({isReady: true});
  }

  render() {
    
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <View>
        <Container>
            <Header>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        </Container>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
