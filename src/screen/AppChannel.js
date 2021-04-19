import React,{ useEffect ,useState} from 'react';
import { View ,SectionList,StyleSheet,SafeAreaView,Dimensions,Text} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { Galleries } from '../components/Galleries';


// const { width, height } = Dimensions.get('window');
// const vh = height/100;
// const screenHeight = Dimensions.get('screen').height;
// const navbarHeight = screenHeight - height ;

export  const AppChannel = ({route,navigation}) => {
    const users =   useSelector(state =>  state.pairReducer.channels);
    const [GALLERUES,setData] = useState(
        [
            {
                data: [...users.galleries]
            },
        ]
    )

    return(
        <SafeAreaView style={styles.darkMode}>
            <SectionList
              sections={GALLERUES}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) =>  <Galleries data={{...item}} navigation={navigation}/>}
              renderSectionHeader={() => (
                  <View>
                <Text style={[styles.contentTitle ,  styles.whiteText]}>{users.user.vendor_name}</Text>
                <View style={[styles.channel__info , styles.whiteText]}>
                    <Text style={ [styles.whiteText , styles.channel__title]}>{ users.user.name.toUpperCase()}</Text>
                    <Text style={ [styles.whiteText , styles.channel__descr]}>{users.user.vendor_description}</Text>
                </View>
                    <Text style={styles.channel}>Assets</Text>
                    </View>
              )}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    channel: {
        color: 'white',
        fontSize: 18,
        padding: 0,
        margin: 0,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    darkMode: {
        height: '100%',
        backgroundColor: 'black',
        paddingTop: 10,
        flex: 1,
        
    },
    contentTitle: {
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold'
    },
    whiteText: {
        color:'white'
    },
    channel__title: {
        fontWeight: "700",
        paddingBottom: 10,
        fontSize:18
    },
    channel__info: {
        padding: 15
    },
    channel__descr:{
        fontSize: 14,
        color: '#878a90',
        
    },
    channelList:{
        padding: 15
    }

})