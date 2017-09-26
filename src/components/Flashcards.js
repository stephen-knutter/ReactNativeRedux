import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from '../reducers';
import {readDecks} from '../storage/decks';
import {loadData} from '../actions/creators';

import Logo from './Header/Logo';
import DeckScreen from './DeckScreen';
import NewCardScreen from './NewCardScreen';
import ReviewScreen from './ReviewScreen';

let store = createStore(reducer);

let headerOptions = {
  headerStyle: {backgroundColor: "#FFFFFF"},
  headerLeft: <Logo />
};

readDecks().then(decks => {
  store.dispatch(loadData(decks));
});

const Navigator = StackNavigator({
  Home: {screen: DeckScreen, navigationOptions: headerOptions},
  Review: {screen: ReviewScreen, navigationOptions: headerOptions},
  CardCreation: {
    screen: NewCardScreen,
    path: "createCard/:deckID",
    navigationOptions: headerOptions
  }
});

class App extends Component {
  render() {
    return(
      <Provider>
        <Navigator />
      </Provider>
    )
  }
}

export default App;
