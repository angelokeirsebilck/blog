import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <Text> {item.title} </Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default IndexScreen;
