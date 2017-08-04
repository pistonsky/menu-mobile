import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';

class MyOrder extends Component {
  render() {
    return (
      <View>
        {this.props.items}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.order.map((id, index) =>
      <MenuItem key={index} menuItem={state.menu.find(x => x.id === id)} />
    )
  };
};

export default connect(mapStateToProps)(MyOrder);
