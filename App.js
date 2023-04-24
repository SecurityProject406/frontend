import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  //인터넷 접근 허용
  // const ask = async () => {
  //   const permission =  
  // }


  if (isEnabled){
    //방화벽 작동

  }
  else{
    //방화벽 작동 해제
  }


  return (
    <View style={styles.container}>
      <Text>this is web filter for smishing!</Text>
      <Switch style = {styles.btnonoff}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnonoff: {
    justifyContent: 'center',
  },
});
