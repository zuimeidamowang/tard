
import React, { memo } from 'react'
import { View } from '@tarojs/components'
import { FC } from '@tarojs/taro'
import '../../style/components/sl-overlay.less'
const  SlOverlay:FC = () => {
return <View className="sl-overlay-wrapper">this is SlOverlay</View>
}

export default memo(SlOverlay)
        