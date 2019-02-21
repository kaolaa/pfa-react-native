//
// Icon Component
//

import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { default as VectorIcon } from 'react-native-vector-icons/MaterialIcons'

import { getColor } from './helpers'

// example ->
// <Icon name="google" size={24} color={COLOR[`${primary}500`].color} />

export default class Icon extends Component {

  static propTypes = {
  };

  static defaultProps = {
    size: 30,
    color: '#757575',
    allowFontScaling: true
  };

  render() {
    const {
      name,
      style,
      size,
      color,
      allowFontScaling
    } = this.props

    return (
      <VectorIcon
        name={name}
        size={size}
        color={getColor(color)}
        style={style}
        allowFontScaling={allowFontScaling}
      />
    )
  }
}
