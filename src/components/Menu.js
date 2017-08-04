import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import { fetchMenu } from '../actions';

class Menu extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  renderRow(menuItem) {
    return <MenuItem menuItem={menuItem} expanded={menuItem.expanded} />;
  }

  render() {
    const dataSource = this.ds.cloneWithRows(
      this.props.menu.map(
        item => { return { ...item, expanded: item.id === this.props.selectedMenuItemId }; }));

    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    selectedMenuItemId: state.selectedMenuItemId
  };
};

export default connect(mapStateToProps, { fetchMenu })(Menu);
