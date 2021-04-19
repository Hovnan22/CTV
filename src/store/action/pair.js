import axios from 'axios';
import { LOAD_CHANNELS, LOAD_USERS } from "../types"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getExistUsers } from '../../asyncStorage/getExistUsers';
// import {getExistUsers} from '../../asyncStorage/getExistUsers'

// platform: 'web',
//                 model: 'chrome'

export const loadUsers = (pairCode) => {
    return async dispatch => {
        

        try {
            const res =  await axios.post(`https://3genrib1y0.execute-api.us-east-1.amazonaws.com/public/users`, {
                platform: 'web',
                "pair_code":pairCode,
            })
            if(res.data.success){
                try {
                    const existtUsers = await getExistUsers();
                    // userInfo[res.data.uuid] = res.data.user;
                    const jsonValue = existtUsers ? existtUsers: {};
                    jsonValue[res.data.user.uuid] = res.data.user;
                    // jsonValue = res.data.user;
                    await AsyncStorage.setItem('users',JSON.stringify(jsonValue));

                  } catch (e) {
                      console.log(e,'error')
                    // saving error
                  }
                return dispatch(GetUsers(res.data));
            }else {
                dispatch(GetUsers(res.data.message || 'Issue with pair code.'));
            }
        } catch (err) {
            console.log(err)
        }

    }
}

export const loadChannels =  (channelID) =>  {
    return async dispatch => {
        try{
            const res = await axios.get(`https://3genrib1y0.execute-api.us-east-1.amazonaws.com/public/users/${channelID}/channels`);

             return dispatch(getChannels(res.data));

        } catch(err) {
            console.log(err)
        }
    }
   

}

const GetUsers = pair => {
    return({
        type: LOAD_USERS,
        pair
    });
}

const getChannels = channels  => {
    return({
        type: LOAD_CHANNELS,
        channels
    })
}


