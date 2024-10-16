//사용자가 가장 먼저 마주하는곳

import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

function RootNavigator() {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;
