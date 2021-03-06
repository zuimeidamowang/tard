import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { SlGrid, SlGridItem } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Grid: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Grid'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlGrid>
            {
              new Array(4).fill('').map((_, i) => (
                <SlGridItem 
                  key={ i }
                  text="文字" 
                  url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
                />
              ))
            }
          </SlGrid>
          <View className='doc-body-content-tip'>自定义列数</View>
          <SlGrid columnNum={ 3 }>
            {
              new Array(3).fill('').map((_, i) => (
                <SlGridItem 
                  key={ i }
                  text="文字" 
                  url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
                />
              ))
            }
          </SlGrid>
          <View className='doc-body-content-tip'>边框</View>
          <SlGrid border>
            {
              new Array(8).fill('').map((_, i) => (
                <SlGridItem 
                  key={ i }
                  text="文字" 
                  url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
                />
              ))
            }
          </SlGrid>
          <View className='doc-body-content-tip'>自定义图片大小</View>
          <SlGrid iconSize={ 40 }>
            {
              new Array(4).fill('').map((_, i) => (
                <SlGridItem 
                  key={ i }
                  text="文字" 
                  url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
                />
              ))
            }
          </SlGrid>
          <View className='doc-body-content-tip'>自定义内容</View>
          <SlGrid>
            {
              new Array(4).fill('').map((_, i) => (
                <SlGridItem 
                  key={ i }
                  className="doc-grid-item-custom"
                >
                  <Image className="grid-image" src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" />
                </SlGridItem>
              ))
            }
          </SlGrid>
          <View className='doc-body-content-tip'>内容横排</View>
          <SlGrid direction='left'>
            {
              new Array(4).fill('').map((_, i) => (
                <SlGridItem 
                  key={ i }
                  text="文字" 
                  url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
                />
              ))
            }
          </SlGrid>
          
        </View>
      </View>
    </View>
  );
};

export default memo(Grid);