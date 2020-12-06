import React, { FunctionComponent, useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { Layout, Fonts, Gutters } from '@/Theme'
import { useDispatch } from 'react-redux'
import InitStartup from '@/Store/Startup/Init'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { StackNavigationProp } from '@react-navigation/stack'

const IndexStartupContainer: FunctionComponent<{ navigation: StackNavigationProp<{}> }> = ({
  navigation,
}) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  )
}

export default IndexStartupContainer
