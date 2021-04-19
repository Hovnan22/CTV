import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Text  } from 'react-native';
import { getExistUsers } from '../asyncStorage/getExistUsers';
import { FlatList,TouchableWithoutFeedback } from 'react-native';
import { UsersList } from '../components/UsersList';


export const  AppMain =  ({route,navigation}) => {
    console.log(navigation,'navigationnavigation')
   const [usersData,setUsersData] = useState();






    useEffect(() => {
        console.log(route)
        const promise = new Promise(async (resolve,reject) => {
            const val = await getExistUsers();
            resolve(val)
        })
        promise.then(
            result => {
                const data = [];
                for(var key in result) {
                    data.push(result[key])
                }
                setUsersData(data)
              },
              error => {
                alert("Rejected: " + error); 
              }

        )
    },[])
    if(usersData){
        return (
        
            <View>
                <Text  style={styles.contentTitle}>My Channels</Text>
                <View style={styles.channelsList}>
                <FlatList
                  data={usersData}
                  renderItem={(item) => {
                      return <UsersList user={item} navigation={navigation}/>
                  }}
                  keyExtractor={item => item.uuid}
                />
                
                    {/* <Pressable  onPress={() => onSend(users)} style={styles.channelsList__item}>
                        <Text >{users[users.uuid].name}</Text>
                    </Pressable> */}
                    
                </View>
                <TouchableWithoutFeedback onPress={() =>{navigation.navigate('Pair')}} >
                    <Text style={{marginTop: 50, padding: 15}}>Touch Here</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }else {
        return <Text>loading...</Text>
    }

   
}

const styles = StyleSheet.create({
    contentTitle: {
        fontWeight: '700',
        fontSize:16,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 10

    },
    channelsList: {
        padding:15,
    },
    channelsList__item: {
        borderRadius: 5,
        position: 'relative',
        flex: 1,
        alignItems: "flex-start",
        justifyContent: 'center',
        padding: 15,
        marginBottom: -1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.125)',
        marginHorizontal: 10,
        marginVertical: 15,
    }
})