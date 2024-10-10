import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Video } from "expo-av";

const VideoPageScreen = () => {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState();
  const [statusSecondVidep, setStatusSecondVideo] = React.useState();

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <View style={styles.buttons}>
        <Button
          title="Play from 5s"
          onPress={() => video.current.playFromPositionAsync(5000)}
        />
        <Button
          title={status.isLooping ? "Set to not loop" : "Set to loop"}
          onPress={() => video.current.setIsLoopingAsync(!status.isLooping)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
  buttons: {
    margin: 16,
  },
});
export default VideoPageScreen;
