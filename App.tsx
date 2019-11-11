// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Login</Text>
//       <Text>Cadastro</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Example from './src/Example';
import Login from './src/pages/login/login.page';
import Cadastro from './src/pages/cadastro/cadastro.page';
import Logado from './src/pages/logado/logado.page';

const App = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  Cadastro: {
    screen: Cadastro,
  },
  Logado: {
    screen: Logado,
  }
});

export default createAppContainer(App);