import React, { useEffect } from 'react';
import { useState  } from 'react';
import { StyleSheet, Dimensions  , TextInput, View, Text, FlatList ,TouchableWithoutFeedback} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Pair_input } from '../components/Pair_inputs';
import { loadUsers } from '../store/action/pair';
// import Icon from '../components/Icon';




const { width, height } = Dimensions.get('window');
const vw = width/100;
const non_number = String.fromCharCode('0x25CF');
let pairValue = '';

export const AppPairScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const users = useSelector(state =>  state.pairReducer.pair);
    const pairTevalues = [];
    resetPairInput();
    const [pairTevalue,setStates] = useState(pairTevalues);
    
    const onChangeText = (e) => {
        pairValue = e;
        for (let i = 0; i < 6; i++){
            if(e[i]) {
                pairTevalues[i]  = {
                    id: i.toString(),
                    val: e[i]
                }

            }else {

                pairTevalues[i] = {
                    ind: i.toString(),
                    val: non_number
                }
            }
        }
            setStates([...pairTevalues]);
            if(e.length >= 6){
                dispatch(loadUsers(e))
            }
    }

    function resetPairInput() {
        for (let i = 0; i < 6; i++){
            pairTevalues[i] = {
                id: i.toString(),
                val: non_number
            };
        }
    }

    const bideTouchPairInput = () => {
        secondTextInput.focus()
    }
    const navigateToMain =() => {
        navigation.navigate('AppMain');
    }
    useEffect(() => {
        pairValue = '';
        if(users && users.success){
            resetPairInput()
            setStates([...pairTevalues]);
            navigation.navigate('AppMain', {users: users.user});
        }
    },[users])


return (
    <View style={styles.wrapper}>
       <Text  style={styles.contentTitle}>Type pair code</Text>
        
            <View style={styles.pair}>
                <TextInput
                    keyboardType = 'numeric'
                    ref={(input) => { secondTextInput = input; }}
                    style={styles.pair__code}
                    value={pairValue}
                    onChangeText={onChangeText}
                />
                <FlatList 
                    numColumns={6}

                    data={pairTevalue} 
                    renderItem={({item}) => {return <Pair_input key={toString( item.index)} data={item} bideTouchPairInput={bideTouchPairInput}/>}}
                    keyExtractor={item => item.id}
                />

                

 

                {/* <PairInput/>  */}
            </View>
            <TouchableWithoutFeedback onPress={navigateToMain} >
                    <Text style={{marginTop: 50, padding: 15}}>Touch Here</Text>
            </TouchableWithoutFeedback>
    </View>
    
)
}


const styles = StyleSheet.create({
    contentTitle: {
        fontSize: 16,
        paddingLeft:10,
        marginBottom: 10,
        marginTop: 10,
    },
    pair: {
        // flex:1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignContent: 'center',
    },
    wrapper: {
        // paddingTop: 55
    },
    pair__code: {
        position: 'absolute',
        top: '500%',
        opacity: 0,
        padding: 0,
        margin: 0,
        color: 'transparent',
        backgroundColor: 'transparent',
        // height: 40, borderColor: 'gray', borderWidth: 1
    },
    pair__inputs: {
        width: 15*vw,
        height: 15*vw,
        margin: '1%',
        fontSize: 16,
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    pair__inputGray: {
        color:'#B2BEC3',
    },
    pair__input: {
        position: 'relative',
        flex: 1,
        top:'50%',
        transform: [{ translate: '-50%', }],
        fontSize:20
    }
})