//import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, Linking, Platform, StyleSheet, Text, View } from "react-native";
//mport * as newsAction from "../../redux/actions/newsAction";

const Card = (props) => {
  console.log("PROPS IN CARD:", props); //blank until made part of the navigation
  //eg. the calling jsx needs attribute navigation={props.navigation} ...

  //const dispatch = useDispatch();
  //some() returns true or false
  // const isFav = useSelector((state) =>
  //   state.news.favorites.some((article) => article.url === props.url)
  // );
  const defaultImage =
    "https://avatars.githubusercontent.com/u/4679115?s=460&v=4";
  const url = props.linkURL;
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: props.image ? props.image : defaultImage }}
          style={styles.image}
          resizeMode={props.resizeMode ? props.resizeMode : "cover"}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          {props.title && props.title.length > 24
            ? props.title.slice(0, 24) + "..."
            : props.title}
        </Text>
        {/* <MaterialIcons
            name={ "favorite" }
            size={24}
            color="black"
            onPress={() => {
              dispatch(newsAction.toggleFavorites(props.url));
            }}
          /> */}
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>
          {props.description && props.description.length > 300
            ? props.description.slice(0, 300) + "..."
            : props.description}
        </Text>
      </View>
      <View style={styles.linkWrapper}>
        <Text
          style={{ color: "blue" }}
          onPress={(props) => {
            // const url = "http://www.forteworks.com/roughest/";
            if (Platform.OS == "web") {
              window.open(url, "_blank");
            } else {
              Linking.openURL(url, "_blank");
            }
          }}
        >
          {props.linkName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 10,
    overflow: "hidden",
  },
  titleWrapper: {
    height: "15%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 3,
  },
  descriptionWrapper: {
    height: "15%",
    paddingHorizontal: 15,
  },
  linkWrapper: {
    height: "15%",
    paddingHorizontal: 15,
    marginTop: 15,
  },
  card: {
    backgroundColor: "#ffffff",
    minHeight: 500,
    display: "flex",
    justifyContent:'space-between',
    flexDirection: "column",
    flex: 1,
    margin: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    /*fontFamily: 'Ubuntu-Bold',*/
    fontSize: 20,
  },
  description: {
    //fontFamily: 'Ubuntu',
    fontSize: 15,
    marginTop: 15,
  },
});

export default Card;
