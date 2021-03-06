import classNames from 'classnames'
import React from 'react'
import { ScrollView } from '@tarojs/components'
import { SlModalContentProps } from '../../../../types/modal'

export default class SlModalContent extends React.Component<
SlModalContentProps
> {
  static displayName  = 'SlModalContent';

  public render (): JSX.Element {
    const rootClass = classNames('slc-modal__content', this.props.className)
    return (
      <ScrollView scrollY className={rootClass}>
        {this.props.children}
      </ScrollView>
    )
  }
}
