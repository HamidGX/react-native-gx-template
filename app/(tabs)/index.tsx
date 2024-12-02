import * as React from 'react'
import {
	View,
	ScrollView,
	Linking,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native'
import { Link } from 'expo-router'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'

import FontAwesome from '@expo/vector-icons/FontAwesome'

const cardInformation = [
	{
		title: 'Shadcn/UI - React Native Reusables',
		description:
			'Ported Shadcn/UI to React Native and crafted with NativeWind v4 and accessibility in mind, react-native-reusables is an open-source project.',
		url: 'https://github.com/mrzachnugent/react-native-reusables',
	},
	{
		title: 'NativeWind 4',
		description:
			'Allows you to use Tailwind CSS to style your components in React Native. Styled components can be shared between all React Native platforms, ',
		url: 'https://www.nativewind.dev/',
	},
	{
		title: 'Expo',
		description:
			'Expo is an open-source platform for making universal native apps for Android, iOS, and the web with Typescript and React.',
		url: 'https://expo.dev/',
	},
]

export default function HomeScreen() {
	const handleOpenURL = (url: string) => {
		Linking.openURL(url)
	}

	return (
		<SafeAreaView className='flex-1 mb-4'>
			<ScrollView className='px-4'>
				<View className='justify-center items-center py-4'>
					<Text className='text-2xl font-bold w-full'>
						Welcome to the GX Template, featuring Shadcn, NativeWind, and Expo
					</Text>
					<Text className='text-lg py-4'>
						A template for building mobile applications with React Native using
						Expo, styled with NativeWind and components from Shadcn.
					</Text>
				</View>
				<View className='flex-row gap-4 justify-between'>
					<Button size='default' className='flex-1'>
						<View className='flex-row items-center'>
							<Text className='text-white text-center mr-2'>Get Started</Text>
							<FontAwesome
								className='color-white'
								size={20}
								name='home'
								color={'white'}
							/>
						</View>
					</Button>
					<Button size='default' className='flex-1'>
						<View className='flex-row items-center'>
							<Link
								href='https://github.com/HamidGX/react-native-gx-template'
								className='text-white text-center mr-2 font-semibold'
							>
								View on Github
							</Link>
							<FontAwesome
								className='color-white'
								size={20}
								name='github'
								color={'white'}
							/>
						</View>
					</Button>
				</View>

				{cardInformation.map((information, index) => (
					<Card className='mt-4' key={index}>
						<CardHeader>
							<CardTitle className='text-2xl font-semibold'>
								{information.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Text className='text-muted-foreground'>
								{information.description}
							</Text>
						</CardContent>
						<CardFooter>
							<TouchableOpacity onPress={() => handleOpenURL(information.url)}>
								<Text className='text-primary font-bold justify-end'>
									Learn More
								</Text>
							</TouchableOpacity>
						</CardFooter>
					</Card>
				))}
			</ScrollView>
		</SafeAreaView>
	)
}
