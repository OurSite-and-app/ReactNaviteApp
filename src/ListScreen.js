import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView  } from 'react-native'
import  {useState} from 'react'
import { ListElem } from './ListElem'

export const ListScreen = ({ navigation }) => {

  const [parties, setParty] = useState([])

  const addParty = (title) => {
    setParty(prev => [
      ...prev, {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const updateHandle = (value) => {
    console.log("val is ", value);
    setText(value)
  }

  const pressUpdate = () => {
    setText(' ');
    console.log("UPDATE!!!");
  }

  const parties_list = [
    {
      title: 'party1',
      comment: 'comment1'
    },
    {
      title: 'party2',
      comment: 'comment2'
    },
    {
      title: 'party3',
      comment: 'comment3'
    },
    {
      title: 'party4',
      comment: 'comment4'
    },
    {
      title: 'party5',
      comment: 'comment5'
    },
    {
      title: 'party6',
      comment: 'comment6'
    },
    {
      title: 'party7',
      comment: 'comment7'
    }
  ];

  return(
    <View style = {styles.container}>
      <ScrollView>
        <ListElem title = "Party1" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party2" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party3" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party4" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party5" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party6" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party7" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party8" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party9" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party10" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party11" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party12" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party13" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party14" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party15" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party16" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party17" data = "01.02.1990" comment = "some long long long comment" />
        <ListElem title = "Party18" data = "01.02.1990" comment = "some long long long comment" />
      </ScrollView>
      <View style={styles.newElemButton}>
        <Text>Boon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1131',
  },
  newElemButton: {
    margin: 5,
    position: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: 25,
    color: "white"
  }
});