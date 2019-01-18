import React from 'react'
import { CustomPicker } from 'react-color'
import { PropTypes } from 'prop-types'
import { Alpha } from 'react-color/lib/components/common'

class AlphaCustom extends React.Component {
  render() {
    const { rgb, hsl, hex, onChange } = this.props
    return (
      <div className="gradient-container relative w-100 mv6 alpha">
        <Alpha
          rgb={rgb}
          hsl={hsl}
          onChange={onChange}
          pointer={() => (
            <div className="pointer-gradient" style={{ background: hex }} />
          )}
        />
      </div>
    )
  }
}

AlphaCustom.propTypes = {
  /** Content of the card */
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  hex: PropTypes.object,
  rgb: PropTypes.object,
  hsl: PropTypes.object,
}

export default CustomPicker(AlphaCustom)
