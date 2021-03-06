import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlFooterButton } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const FooterButton: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='FooterButton'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <SlFooterButton
          className='pos-1'
          name="按钮1" />

        <View className='doc-body-content-tip'>双按钮用法</View>
        <SlFooterButton
          name="按钮2"
          secondName='按钮1'
          doubleBtn />

        <View className='doc-body-content-tip'>自定义按钮样式</View>
        <SlFooterButton
          name="按钮2"
          secondName='按钮1'
          doubleBtn
          radius={20} />

        <View className='doc-body-content-tip'>自定义组件内边距</View>
        <SlFooterButton
          name="按钮2"
          secondName='按钮1'
          doubleBtn
          radius={20}
          padding='10'
          margin={20} />

        <View className='doc-body-content-tip'>自定义组件内双Button间距</View>
        <SlFooterButton 
          name="按钮2"
          background='#cf6d6d'
          secBackground='#c1b0b0'
          secondName='按钮1'
          doubleBtn = {true}
          radius={20}
          padding='20'
          margin={20} />

        <View className='doc-body-content-tip'>开启底部定位</View>
        <SlFooterButton 
          name="底部定位"
          background='#cf6d6d'
          isFixed={true}
          radius={20}
          padding='20'
          margin={20} />
      </View>
    </View>
  );
};

export default memo(FooterButton);