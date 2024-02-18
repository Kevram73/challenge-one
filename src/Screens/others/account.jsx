import  {View, Text, Button} from "react-native"

const Account = ({navigation}) => {
    return (
        <View>
        <Text>Account Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
        </View>
    );
}

export default Account;