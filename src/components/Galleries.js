import React, { useEffect, useState ,} from 'react';
import { Image,Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View ,TouchableWithoutFeedback} from 'react-native';
import { useSelector } from 'react-redux';
const templates = {
    'default':'AcJASxeId0Rm'
}


export const Galleries = (gallery) => {
    const [imgRatio,setImgRatio] = useState(null);

    // const windowWidth = Dimensions.get('window').width;
    const users =   useSelector(state =>  state.pairReducer.channels);


    const imageUrl = `https://www.cincopa.com/media-platform/api/thumb.aspx?size=large&fid=${gallery.data.gallery_fid}`;
    useEffect(() => {
        Image.getSize(imageUrl, ( width, height ) =>
        {
            setImgRatio(width/height);
        }, ( error ) =>
        {
            console.log(error)
        });
    })

    const openGallery = function() {
		if(users.user){
			window.cincopa = window.cincopa || {};
			window.cincopa.analytics = {
				email: users.user.email,
				name: users.user.name,
				id: users.user.id
			};
		}

        gallery.navigation.navigate('AppGallery',gallery.data);

		
    }

    return(
        
            <TouchableWithoutFeedback onPress={() => openGallery()}>
                <View style={[styles.gallery,styles.darkeMode]}>
                <View style={{flexDirection: 'row'}}>
                    <Image 
                    source={{uri: `https://www.cincopa.com/media-platform/api/thumb.aspx?size=large&fid=${gallery.data.gallery_fid}`}}
                    style={[styles.galleryImg,{aspectRatio:imgRatio }]}
                    />

                </View>
                <View style={styles.galleryListItem}>
                        <Text style={styles.galleryListListItemname}>
                            {gallery.data.name}
                        </Text>
                        {
                            gallery.data.description? 
                            <Text style={styles.galleryListListItemdescr}>
                            {gallery.data.description}
                            </Text>: null
                        }

                </View>
                </View>
            </TouchableWithoutFeedback>
            
            
    )
}
const styles = StyleSheet.create({
    galleryListListItemdescr: {
        marginTop: 5,
        fontSize: 14,
        color:'#878a90'
    },
    galleryListListItemname: {
        color: '#fff'
    },
    galleryListItem: {
        padding: 5,
        paddingLeft: 0,
    },
    galleryImg: {
        resizeMode: 'contain',
        flex: 1,
    },
    gallery: {
        borderRadius: 5,
        position:'relative',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 15,
        marginBottom: 1,
        backgroundColor:'#fff',
        marginHorizontal: 10,
        marginVertical: 15
    },
    darkeMode: {
        backgroundColor: '#1f2125',
        color: 'white',
    }
})

/*'<div class="channels-list__item '+(el.status != 'active' ? 'channels-list__item--expired':'')+'" data-channel_fid="'+el.gallery_fid+'" data-channel_id="'+el.uuid+'">
<img src="https://www.cincopa.com/media-platform/api/thumb.aspx?size=large&fid='+el.gallery_fid+'">\
			<div class="channels-list__info"><div class="channels-list__itemname"><h3>'+el.name+'</h3></div>\
			<div class="channels-list__itemdescr"><p>'+el.description+'</p></div></div>\
			'+(el.status != 'active' ? '<div class="channels-list__expired">'+el.status+'</div>':'')
            </div>';*/
