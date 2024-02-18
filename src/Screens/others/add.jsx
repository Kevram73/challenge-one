import  {View, Text, Button} from "react-native"

const AddFeed = ({navigation}) => {
    return (
        <View>
        <Text>Add Feed Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
        </View>
    );
}

export default AddFeed;