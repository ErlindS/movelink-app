import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

function TabIcon({ name, color, focused }: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  focused: boolean;
}) {
  return (
    <View style={styles.iconWrapper}>
      <FontAwesome name={name} size={20} color={color} />
      {focused && <View style={styles.activeDot} />}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => <View style={styles.tabBarBg} />,
        tabBarLabelStyle: styles.label,
        tabBarItemStyle: styles.tabItem,
        headerStyle: { backgroundColor: Colors.bg },
        headerTintColor: Colors.text,
        headerShadowVisible: false,
        headerTitleStyle: { fontWeight: '800', fontSize: 18, letterSpacing: -0.3 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Training',
          tabBarLabel: 'Training',
          tabBarIcon: ({ color, focused }) => <TabIcon name="play-circle" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'Verlauf',
          tabBarLabel: 'Verlauf',
          tabBarIcon: ({ color, focused }) => <TabIcon name="list-ul" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Gerät',
          tabBarLabel: 'Gerät',
          tabBarIcon: ({ color, focused }) => <TabIcon name="bluetooth" color={color} focused={focused} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'transparent',
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    height: 70,
    paddingBottom: 8,
    paddingTop: 4,
    elevation: 0,
  },
  tabBarBg: {
    flex: 1,
    backgroundColor: 'rgba(7,7,7,0.97)',
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.3,
    marginTop: -2,
  },
  tabItem: {
    paddingTop: 4,
  },
  iconWrapper: {
    alignItems: 'center',
    gap: 4,
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.primary,
  },
});
