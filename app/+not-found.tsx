import React from 'react'

import { View } from 'react-native'
import { Link, Stack } from 'expo-router'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Text } from '~/components/ui/text'

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen />
			<View className='h-screen w-full flex-1 items-center justify-center'>
				<Card className='w-full max-w-md bg-card'>
					<CardHeader>
						<CardTitle className='text-4xl font-extrabold text-center'>
							404
						</CardTitle>
					</CardHeader>
					<CardContent className='text-center'>
						<Text className='text-xl font-semibold mb-4'>Page Not Founds</Text>
						<Text className='text-muted-foreground'>
							Oops! The page you're looking for doesn't exist or has been moved.
						</Text>
					</CardContent>
					<CardFooter className='flex justify-center'>
						<Button>
							<Link className='text-white' href='/'>
								Go back home
							</Link>
						</Button>
					</CardFooter>
				</Card>
			</View>
		</>
	)
}
