import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectRange } from '../redux/chart';
import Switch from '../components/range/switch';
import { RANGES } from '../redux/chart';

@connect(
  (state) => {
    const {
      chart: {
        range,
      },
    } = state;
    return {
      range,
    };
  },
  (dispatch) => bindActionCreators({ selectRange }, dispatch)
)
export default class Ranges extends Component {

  render() {
    const {
      range,
      selectRange,
    } = this.props;
    return (
      <View style={styles.container}>
        <Switch
          ranges={RANGES}
          current={range}
          onSelectRange={selectRange}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(21, 36, 85, 1)',
    borderWidth: 0.2,
    borderColor: 'white',
  },
});