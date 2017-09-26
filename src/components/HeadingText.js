import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, scalingFactors} from '../styles/fonts';

//import Dimensions from 'Dimensions';
//let {width} = Dimensions.get("window");

class HeadingText extends Component {
  static displayName = "HeadingText";

  render() {
    return(
      <Text style={{this.props.style, fonts.big}}>
        {this.props.children}
      </Text>
    )
  }
}

export default HeadingText;
