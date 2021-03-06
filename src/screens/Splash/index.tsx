import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ImageBackground} from 'react-native';

import {styles, stylesBackground} from './styles';
import {globalStyles} from '../../utils/styles/global.styles';

import {colors} from '../../utils';

import background from '../../assets/bg.png';

import Button from '../../components/SplashButton';

export default function Splash() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={stylesBackground.background}
        source={background}
      />
      <View style={styles.content}>
        <View style={styles.topContentContainer}>
          <Text style={styles.text16Bold}>Buy & Sell Authentic</Text>
          <Text style={styles.text48Bold}>X-S-Store</Text>
          <Text style={styles.text24}>{'Real Time\nMakret Pricing'}</Text>
        </View>
        <View style={styles.bottomContentContainer}>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            textColor={colors.labelBlack100}
            title="Sign Up"
            backColor={colors.labelWhite100}
          />
          <Button
            onPress={() => navigation.navigate('SignIn')}
            textColor={colors.labelWhite100}
            title="Sign In"
            backColor={colors.labelBlack30}
          />
        </View>
      </View>
    </View>
  );
}
