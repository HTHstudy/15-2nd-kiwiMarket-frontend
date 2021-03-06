import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styled from "styled-components/native";
import { IMAGE_SIZE } from "../constants/Layout";

const ShortItemCard = ({ goItemDetail, data }) => {
  return (
    <ShortCard
      onPress={() => goItemDetail(data.itemId ? data.itemId : data.id)}
    >
      <ShortCardImage
        source={{
          uri: data.imgSrc,
        }}
      />
      <Title numberOfLines={1}>{data.title}</Title>
      <Price>{`${data.price && data.price.toLocaleString()}원`}</Price>
    </ShortCard>
  );
};

export default ShortItemCard;

const ShortCard = styled.Pressable`
  display: flex;
  flex-direction: column;
  width: ${IMAGE_SIZE.shortCardWidth}px;
`;

const ShortCardImage = styled.Image`
  width: ${IMAGE_SIZE.shortCardWidth}px;
  height: ${IMAGE_SIZE.shortCardHeight}px;
  border-radius: 6px;
`;

const Title = styled.Text`
  margin: 8px 0;
`;

const Price = styled.Text`
  margin-bottom: 24px;
  font-weight: 700;
`;
