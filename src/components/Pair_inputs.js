import React from 'react';
import { Text ,StyleSheet,Dimensions} from 'react-native';
import { View } from 'react-native';


const { width, height } = Dimensions.get('window');
const vw = width/100;


export  const Pair_input = ({bideTouchPairInput,data}) => {
   return(  

<View style={styles.pair__inputs}  onStartShouldSetResponder={() => bideTouchPairInput()}>
    <Text style={[styles.pair__input,styles.pair__inputGray]} >{data.val}</Text>
</View>
        )
}

const styles = StyleSheet.create({

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
        // position: 'relative',
        // top:'50%',
        // // transform: [{ translate: '-50%', }],
        // fontSize:20
    }
})
