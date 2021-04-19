import 'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppPairScreen } from '../screen/AppPairScreen';
import {AppMain} from '../screen/AppMain'
import { AppChannel } from '../screen/AppChannel';
import { HeaderBackButton } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text,Button } from 'react-native';
import { AppGallery } from '../screen/AppGallery';
import { AppComponent } from '../ui/AppComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createStackNavigator(
);



export default  function  AppNavigation(route) {
  const [isloaded,setIsLoaded] = useState() 
  const [homePage,setHomePage] = useState({name: 'Pair',component: AppPairScreen});
  const [secPage,setSecPage] =    useState({name: 'AppMain',component: AppMain});
  const routeNameRef = React.createRef();

  const getStorage = async function (){
    try {
      // const val = await AsyncStorage.getItem('users');
      const users = JSON.parse(await AsyncStorage.getItem('users'))


        if(users != undefined  ) {
          setSecPage({name: 'Pair',component: AppPairScreen});
          setHomePage({name: 'AppMain',component: AppMain});

        }else {
          console.log('empty');
        }
        setIsLoaded(true);
        
      } catch(e) {
        console.log(e,'error')
      }
  }
  
  useEffect(function() {
    getStorage();
  },[])
  if(isloaded){
    console.log(routeNameRef,'routeNameRef')

  return (
    <NavigationContainer>

      <Stack.Navigator
       screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#2599DB',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      
        headerLeft : () => (
          <Button
            onPress={() => {
              console.log(navigation,'navigation')
            
              navigation.navigate('Pair')
        }}
            title="add"
            
          />
        ),
        headerRight: ( ) => (
          <Button
            onPress={() => {
              console.log(navigation,'navigation')
              navigation.navigate('Pair')
        }}
            title="menu"
            
          />
        ),
      
      })}
        >

      <Stack.Screen name={'AppMain'} component={AppComponent} options={({ route, navigation }) => {
        console.log(route,'options')
        return {title: 'Cincopa',}
  }}/>
        {/* <Stack.Screen name={homePage.name} component={homePage.component} options={{title: 'Cincopa'}} /> */}
      <Stack.Screen name={secPage.name} component={secPage.component} options={{title: 'Cincopa',}} />


      <Stack.Screen name="AppChannel" component={AppChannel} options={{title: 'Cincopa',}}/>
      <Stack.Screen name="AppGallery" component={AppGallery} options={{title: 'Cincopa',}}/>

</Stack.Navigator>
    </NavigationContainer>
  );
}else {
  return <Text>loadeng...</Text>
}
}




