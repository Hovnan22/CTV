import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { loadChannels } from '../store/action/pair';

export const UsersList = ({user,navigation}) => {
    
    const dispatch = useDispatch();
    const onSend =  async users => {
        await dispatch(loadChannels(users.uuid));
        navigation.navigate('AppChannel');
    }
    return(
        <Pressable  onPress={() => onSend(user.item)} style={styles.channelsList__item}>
            <Text >{user.item.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

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