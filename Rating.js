import React, { useState } from "react";
import { H1, Icon } from "native-base";
import { Row } from "react-native-easy-grid";
import { TouchableWithoutFeedback } from "react-native";

export default function Rating({ Rating }) {
  const [rating, setRating] = useState(Rating);
  return (
    <Row>
      <H1>Rating: {rating}</H1>
      {rating >= 1 ? (
        <TouchableWithoutFeedback onPress={() => setRating(1)}>
          <Icon type="FontAwesome" name="star" style={styles.startStyle} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(1)}>
          <Icon type="FontAwesome" name="star-o" />
        </TouchableWithoutFeedback>
      )}
      {rating >= 2 ? (
        <TouchableWithoutFeedback onPress={() => setRating(2)}>
          <Icon type="FontAwesome" name="star" style={styles.startStyle} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(2)}>
          <Icon type="FontAwesome" name="star-o" />
        </TouchableWithoutFeedback>
      )}
      {rating >= 3 ? (
        <TouchableWithoutFeedback onPress={() => setRating(3)}>
          <Icon type="FontAwesome" name="star" style={styles.startStyle} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(3)}>
          <Icon type="FontAwesome" name="star-o" />
        </TouchableWithoutFeedback>
      )}
      {rating >= 4 ? (
        <TouchableWithoutFeedback onPress={() => setRating(4)}>
          <Icon type="FontAwesome" name="star" style={styles.startStyle} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(4)}>
          <Icon type="FontAwesome" name="star-o" />
        </TouchableWithoutFeedback>
      )}
      {rating >= 5 ? (
        <TouchableWithoutFeedback onPress={() => setRating(5)}>
          <Icon type="FontAwesome" name="star" style={styles.startStyle} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(5)}>
          <Icon type="FontAwesome" name="star-o" />
        </TouchableWithoutFeedback>
      )}
    </Row>
  );
}
const styles = {
  startStyle: {
    color: "orange",
  },
};
