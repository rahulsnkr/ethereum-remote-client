import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

module.exports = class PasswordWarning extends PureComponent {
  static contextTypes = {
    t: PropTypes.func,
  }

  render () {
    const { t } = this.context

    return (
      <div className={'pass-warning'}>
        <p>
          <span>{t('passWarningOne')}</span>
        </p>
      </div>
    )
  }
}
