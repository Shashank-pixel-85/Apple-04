import React from 'react';
import { Text, StyleSheet } from 'react-native';
export default function SectionTitle({children}){return <Text style={styles.title}>{children}</Text>}
const styles=StyleSheet.create({title:{fontSize:30,fontWeight:'700',letterSpacing:-1,textAlign:'center',color:'#1d1d1f',marginBottom:26}});