import { createBottomTabNavigator } from 'react-navigation';
import { Home, Search } from 'screens';
import { colors } from 'styles';

const Router = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Search: {
      screen: Search,
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: colors.white,
      style: {
        backgroundColor: colors.secondary,
      },
    },
  },
);

export default Router;
