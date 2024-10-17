import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import CalenderHomeScreen from '../../screens/calendar/CalenderHomeScreen';
import MapHomeScreen from '../../screens/map/MapHomeScreen';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalenderHome" component={CalenderHomeScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
