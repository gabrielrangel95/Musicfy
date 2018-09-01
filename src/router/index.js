import { createBottomTabNavigator } from 'react-navigation';
import { Main, Search } from 'screens';

const Router = createBottomTabNavigator({
  Main: {
    screen: Main,
  },
  Search: {
    screen: Search,
  },
});

export default Router;
