import React, { FunctionComponent } from 'react'
import { View, Image } from 'react-native'
import { Layout, Images } from '@/Theme'

type BrandProps = {
  height?: number,
  width?: number,
  mode?: 'contain' | 'center' | 'stretch' | 'cover' | 'repeat' | undefined,
}

const Brand: FunctionComponent<BrandProps> = ({ height = 200, width = 200, mode = 'contain' }) => (
  <View style={{ height, width }}>
    <Image style={Layout.fullSize} source={Images.logo} resizeMode={mode} />
  </View>
)

export default Brand
