import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';
import * as actions from '../actions';

class MenuItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { menuItem, expanded } = this.props;
    const { imageStyle } = styles;

    if (expanded) {
      return (
        <View>
          <CardSection>
            <Image style={imageStyle} source={{ uri: menuItem.image }} />
          </CardSection>

          <CardSection>
            <Button onPress={() => this.props.addMenuItem(menuItem.id)}>
              Add to Order
            </Button>
          </CardSection>
        </View>
      );
    }
  }

  render() {
    const {
      thumbnailContainerStyle,
      thumbnailStyle,
      menuItemShortInfoStyle,
      menuItemTitleStyle
    } = styles;
    const { id, title, thumbnail_image, price } = this.props.menuItem;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectMenuItem(id)}>
        <View>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={menuItemShortInfoStyle}>
              <Text style={menuItemTitleStyle}>
                {title}
              </Text>
              <Text>
                {price} IDR
              </Text>
            </View>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  menuItemShortInfoStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  menuItemTitleStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, actions)(MenuItem);
