import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, FlatList, RefreshControl } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import axios from "axios"
import { getPathFromState } from "@react-navigation/native";

export default function DetailPost(props) {

    const title = props.route.params.title;
    const body = props.route.params.body;
    const id = props.route.params.id;

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getComment();
    }, [])

    const getComment = () => {
        setIsLoading(true);
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
          .then((res) => {
            setComments(res.data);
            setIsLoading(false);
          })
          .catch(() => {
            alert("Error Get Comments");
            setIsLoading(false);
          });
      };

    const _renderItem = ({ item }) => {
        return (
            <ListItem key={item.id.toString()} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title numberOfLines={1}>
                        {item.email}
                    </ListItem.Title>
                    <ListItem.Subtitle numberOfLines={2}>{`${item.name} - ${item.body}`}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <View style={style.container}>
            <Text h2 style={{ fontWeight: "bold" }}>
                {title}
            </Text>
            <Text style={{ marginTop: 20 }}>{body}</Text>
            <Text style={{ marginTop: 20, color: "grey" }}>Comments</Text>
            <FlatList
                data={comments}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={getComment} />
                }
            />
        </View>
    );

};

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
});