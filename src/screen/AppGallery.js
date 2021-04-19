import React, {Component} from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
const templates = {
    'default':'AcJASxeId0Rm'
}


export const AppGallery = ({route}) => {
    const gallery = route.params;
    return (
        
<WebView
    source={{
        uri: 'https://testingcincopatv.000webhostapp.com/index.html?fid='+gallery.gallery_fid+'&template='+templates.default+''
    }}
/>
    )
}