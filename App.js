import React from 'react';

import {
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import store from "./src/store"
// import ScriptTag  from 'react-script-tag'

const App = () => {
  return (
    <> 
    <Provider store={store}>
        <AppNavigation ></AppNavigation>
    </Provider>
                  
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>



        </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
