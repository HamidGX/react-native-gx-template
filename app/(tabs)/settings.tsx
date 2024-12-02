import React from 'react'

import { View, Text, Image } from 'react-native'
import { Link } from 'expo-router'

export default function SettingsScreen() {
	return (
		<View className='flex-1 flex-col items-center justify-center px-4 h-screen'>
			<Link href='/'>
				<Image className='w-64 h-64 mb-4' source={require('assets/icon.png')} />
			</Link>
			<View className='flex-col gap-4 py-4'>
				<Text className='text-center font-medium'>REACT: 18.3.1</Text>
				<Text className='text-center font-medium'>REACT NATIVE: 0.76.3</Text>
				<Text className='text-center font-medium'>GX TEMPLATE: 1.0.0</Text>
			</View>
		</View>
	)
}
