import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const MyOrderTabIcon = ({ title, totalPrice }) => {
  if (totalPrice > 0) {
    return (
      <View>
        <Text>
          {title} ({totalPrice} IDR)
        </Text>
      </View>
    );
  }
  return (
    <View>
      <Text>
        {title}
      </Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    itemsCount: state.order.length,
    totalPrice: state.order
      .map(id => state.menu.find(item => item.id === id))
      .reduce((a, b) => a + b.price, 0)
  };
};

export default connect(mapStateToProps)(MyOrderTabIcon);
