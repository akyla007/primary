import React from "react";
import { Container, Header, Content, Button, Text,Body,Title } from "native-base";
import Rating from "./Rating";
import ProductList from "./ProductList";
export default function App() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>List of Products</Title>
        </Body>
      </Header>
      <Content>
        <ProductList />
      </Content>
    </Container>
  );
}
