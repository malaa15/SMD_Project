import React, { useState } from "react";
import { useEffect } from "react";
import {
    Button,
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";


export default function MapScreen({ navigation }) {





    return (
        <SafeAreaView>


            <MapView
                style={styles.map}

                zoomControlEnabled={true}
                provider="google"

            >
                <MapView.Marker
                    coordinate={{
                        latitude: 30.014068,
                        longitude: 31.475094
                    }}
                    title={"Amry Gym"}
                    description={"Lotus"}
                />
                <MapView.Marker
                    coordinate={{
                        latitude: 30.090482,
                        longitude: 31.346981
                    }}
                    title={"Amry Gym"}
                    description={"Carv"}
                />
            </MapView>

        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});