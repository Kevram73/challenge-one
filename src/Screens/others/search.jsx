import  {View, Text, Button} from "react-native"

const Search = ({navigation}) => {
    return (
        <View style={{ alignContent: 'center', display: 'flex' }}>
        <Text>Allez au profile</Text>
        <Button onPress={() => navigation.navigate('BottomTabs', {screen : 'Mon Compte', initial : true})} title="Allez au profil"/>
        
        </View>
    );
}

export default Search;