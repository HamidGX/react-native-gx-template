import React from 'react'
import { Tabs } from 'expo-router'

import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
			<Tabs.Screen
				name='index'
				options={{
					headerTitle: 'GX Template',
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name='home' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='settings'
				options={{
					title: 'Settings',
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name='cog' color={color} />
					),
				}}
			/>
		</Tabs>
	)
}
