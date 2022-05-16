import React from "react";
import {

    View,
    Text,
    
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import MapView , {PROVIDER_GOOGLE} from 'react-native-maps';

const OrderDelivery = () => {

    function renderMap(){
        <View style = {{
            flex:1
        }}
         provider = {PROVIDER_GOOGLE}>
            <MapView style = {{flex:1}}>

            </MapView>

        </View>
    }

    return(
        <View style = {{
            flex:1
        }}>
           {renderMap()}
           
        </View>
    );
}

export default OrderDelivery;