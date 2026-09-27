import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PhoneArt({color='#f1ce45', small=false}) {
  return <View style={[styles.wrap, small && styles.small]}>
    <View style={[styles.back,{backgroundColor:color}]}>
      <View style={styles.lensA}/><View style={styles.lensB}/><View style={styles.lensC}/>
    </View>
    <View style={styles.front}><View style={styles.island}/><View style={styles.glow}><Text style={styles.time}>9:41</Text></View></View>
  </View>
}
const styles=StyleSheet.create({
  wrap:{width:120,height:230,position:'relative',marginHorizontal:-18},
  small:{transform:[{scale:.72}],marginHorizontal:-25},
  back:{position:'absolute',width:88,height:182,left:5,top:32,borderRadius:24,borderWidth:4,borderColor:'#9a9a9a'},
  front:{position:'absolute',width:88,height:190,right:4,top:14,borderRadius:25,borderWidth:4,borderColor:'#777',backgroundColor:'#111',overflow:'hidden'},
  island:{position:'absolute',top:8,left:26,width:36,height:9,borderRadius:8,backgroundColor:'#000',zIndex:2},
  glow:{position:'absolute',left:4,right:4,top:5,bottom:4,borderRadius:19,backgroundColor:'#263d78',alignItems:'center',paddingTop:45},
  time:{fontSize:22,fontWeight:'700',color:'#fff'},
  lensA:{position:'absolute',width:25,height:25,borderRadius:13,backgroundColor:'#111',left:8,top:9},
  lensB:{position:'absolute',width:25,height:25,borderRadius:13,backgroundColor:'#111',left:38,top:9},
  lensC:{position:'absolute',width:25,height:25,borderRadius:13,backgroundColor:'#111',left:23,top:38}
});