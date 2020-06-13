import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import MarketScreen from '../screens/Market/index';
import NewsScreen from '../screens/NewsScreen';
import InterestedScreen from '../screens/InterestedScreen';
import InfoScreen from '../screens/InfoScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Market';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          title: '주식시장',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-trending-up" />,
        }}
      />
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: '뉴스',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-paper"/>,
        }}
      />
      <BottomTab.Screen
        name="Interested"
        component={InterestedScreen}
        options={{
          title: '관심목록',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-heart" />,
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: '정보',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-information-circle" />,
        }}
      />
    </BottomTab.Navigator>
    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Market':
      return '주식 정보';
    case 'News':
      return '뉴스';
    case 'Interested':
      return '관심목록';
    case 'Info':
      return '정보';
      
  }
}
