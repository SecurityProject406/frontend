import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, Switch, NativeModules } from 'react-native';
import { Permissions , Request } from 'expo-permissions'
  
const { FirewallManager } = NativeModules;


export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  //인터넷 접근 허용
  // const ask = async () => {
  //   const permission =  
  // }
  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.INTERNET);
    if (status === 'granted') {
      console.log('네트워크 접근 권한이 허용되었습니다.');
    } else {
      console.log('네트워크 접근 권한이 거부되었습니다.');
    }
  };


  if (isEnabled){
    //방화벽 작동
    //get domain
    domain = ''
    //ai test -> return isbenign (python 연결하는법)
    isBenign = true
    if(isBenign){
      FirewallManager.unBlockDomain(domain)
    }
    else{
      FirewallManager.BlockDomain(domain)
    }
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
