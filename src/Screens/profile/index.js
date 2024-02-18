import  {View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar, Pressable} from "react-native";
import { Icon, TextInput, Appbar, Card } from 'react-native-paper';
import React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import RandomImagesSection from '../../Components/RandomImageSection';
const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);
  
const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });


const Profile = ({navigation}) => {
    

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    const images = [
        require('../../images/top-profile.jpg'),
        require('../../images/profile.jpg'),
    ]


    return (
            
            <ScrollView>
            
                <TouchableOpacity>
                    <Card>
                        <Card.Cover source={images[0]} />
                    </Card>
                </TouchableOpacity>
                <View style={styles.header}>
                    <View style={styles.profile}>
                        <Image source={images[1]} style={styles.profile_photo}/>
                    </View>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.surname}>@johndoe</Text>
                    <Text style={styles.profile_text}>There is no way to fight this genjutsu 🔥</Text>
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '60%', marginTop: 20}}>
                            <View style={{flexDirection: "column", justifyContent: 'center'}}>
                                <Text style={{fontWeight: 'bold', color: 'black', textAlign: "center"}}>0</Text>
                                <Text style={{textAlign: 'center'}}>Followers</Text>
                            </View>
                            <View style={{flexDirection: "column", justifyContent: 'center'}}>
                                <Text style={{fontWeight: 'bold', textAlign: 'center'}}>0</Text>
                                <Text style={{ textAlign: 'center' }}>Following</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, width: '60%' }}>
                        <Button
                            style={{borderRadius: 50}}
                            onPress={() => navigation.navigate('Profile')}
                            title="Edit Profile"
                            color={'#000'}
                            backgroundColor={'#000'}
                            borderColor={'#000'}
                        />
                    </View>
                    <TabView
                        display="flex"
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: '100%' }}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Text style={{ fontSize:20, fontWeight: 'bold', marginRight:25 }}>Random</Text>
                        <View style={{ width:50, height:5, color: '#000' }}></View>
                    </View>
                    
                    <Text style={{ fontSize:20, fontWeight: 'bold', color: 'grey' }}>Private</Text>
                </View>
                <View>
                    <RandomImagesSection/>
                </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
    profile: {
        width: '50',
        height: '50',
        height: 100,
        marginTop: -70,
        borderRadius: 100,
        border:5,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    profile_photo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: '#fff'
    },
    header: {
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30
    },
    surname: {
        color: 'grey',
        fontSize: 16,
        marginTop: 6,
    },
    profile_text: {
        color: 'black',
        fontSize: 14,
        marginTop: 8,
        width: '60%',
        justifyContent: 'center',
        textAlign: 'center'
    }
});
export default Profile;