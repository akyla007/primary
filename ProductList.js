import React from "react";
import {
  Container,
  Header,
  Content,
  H1,
  List,
  Text,
  ListItem,
} from "native-base";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const getProducts = () => {
    return [
      {
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: "May 31, 2016",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim exfaucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 4,
        numOfReviews: 2,
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: "October 31, 2016",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Aenean porttitor, tellus laoreet venenatis facilisis, enim exfaucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 2,
        numOfReviews: 12,
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Aenean porttitor, tellus laoreet venenatis facilisis, enim exfaucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 5,
        numOfReviews: 2,
      },
    ];
  };

  const products = getProducts();
  const listProducts = products.map((product) => (
    <ProductCard key={product.productName} data={product} />
  ));
  return (
    <Content>
      <List>{listProducts}</List>
    </Content>
  );
}
