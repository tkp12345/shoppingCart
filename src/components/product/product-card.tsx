import React, { useState } from "react";
import styled from "@emotion/styled";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorite } from "@/hooks/use-favorite.ts";
import { Product } from "@/types/api/product-types.ts";

export const ProductCard = ({ product }: { product: Product }) => {
  const { url, brandName, name, price } = product;
  const { handleFavoriteClick } = useFavorite();
  const [isFavorited, setIsFavorited] = useState(product.isFavorite);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <CardContainer>
      <ImageContainer>
        <ProductImage src={url} alt={name} />
        <FavoriteButton onClick={toggleFavorite}>
          {isFavorited ? (
            <AiFillHeart size={24} color="red" />
          ) : (
            <AiOutlineHeart size={24} color="gray" />
          )}
        </FavoriteButton>
      </ImageContainer>
      <ProductInfo>
        <ProductTitle>{brandName}</ProductTitle>
        <ProductDescription>{name}</ProductDescription>
        <PriceInfo>
          {price.real.toLocaleString()}원
          {price.tag > product.price.real && (
            <OriginalPrice>{price.tag.toLocaleString()}원</OriginalPrice>
          )}
        </PriceInfo>
      </ProductInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: left;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductTitle = styled.h2`
  font-size: 1rem;
  margin: 0 0 8px;
  color: #333;
`;

const ProductDescription = styled.p`
  margin: 0;
  color: #999;
`;

const PriceInfo = styled.div`
  margin-top: 8px;
  font-weight: bold;
  color: #000;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #ccc;
  margin-left: 8px;
`;
