import AsyncStorage from '@react-native-async-storage/async-storage';

export const  getExistUsers = async function (){
    try {
        const value = await AsyncStorage.getItem('users');
        if(value == null) {
          return ;
        }
        return JSON.parse(value);
      } catch(e) {
        console.log(e,'error');
    }
  }