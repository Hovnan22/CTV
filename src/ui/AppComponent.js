import React from  'react'
import { View } from 'react-native'
import { AppMain } from '../screen/AppMain'


export const AppComponent = ({route,navigation}) => {
    console.log(navigation,'navigation')
    return (
        <View>
            <AppMain navigation={navigation}/>
        </View>
    )
}