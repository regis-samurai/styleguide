import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import withDevice from '../utils/withDeviceHoc'

class Tab extends Component {
  handleClick = e => {
    !this.props.disabled && this.props.onClick && this.props.onClick(e)
  }

  render() {
    const { active, fullWidth, label, disabled, isMobile, hidden } = this.props
    const isFullWidth = fullWidth || isMobile

    let tabStyle =
      'c-muted-1 b--transparent hover-c-action-primary pointer vtex-tab__button--inactive'

    if (active && disabled) {
      tabStyle = 'fw5 b--muted-1 c-muted-2'
    } else if (active) {
      tabStyle = 'c-on-muted b--emphasis fw5 vtex-tab__button--active'
    } else if (disabled) {
      tabStyle = 'b--muted-4 c-muted-3'
    }

    return (
      <button
        type="button"
        onClick={this.handleClick}
        className={classNames(
          `vtex-tab__button bt-0 bl-0 br-0 bw1 v-mid relative h-regular ph6 t-body bg-transparent outline-0 ${tabStyle}`,
          {
            ['w-100']: isFullWidth,
            ['dn']: hidden && isFullWidth,
            ['o-0']: hidden && !isFullWidth,
          }
        )}>
        {label}
      </button>
    )
  }
}

Tab.defaultProps = {
  disabled: false,
}

Tab.propTypes = {
  active: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  isMobile: PropTypes.bool,
}

export default withDevice(Tab)
