import React from 'react';
import styled from '@emotion/styled';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {useFavorite} from "@/hooks/use-favorite.ts";

interface ProductCardProps {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    isFavorited: boolean;
    company: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, name, imageUrl, price, isFavorited, company }) => {
    const { handleFavoriteClick } = useFavorite();

    return (
        <Card>
            <FavoriteButton onClick={() => handleFavoriteClick(id, isFavorited)}>
                {isFavorited ? <AiFillHeart color="red" /> : <AiOutlineHeart color="gray" />}
            </FavoriteButton>
            <Image src={imageUrl} alt={name} />
            <Details>
                <Company>{company}</Company>
                <Name>{name}</Name>
                <Price>{price.toLocaleString()}원</Price>
            </Details>
        </Card>
    );
};

const Card = styled.div`
  position: relative;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 16px;
  text-align: center;
`;

const Company = styled.h3`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const Name = styled.p`
  margin: 8px 0 0;
  font-size: 16px;
  color: #333;
`;

const Price = styled.p`
  margin: 16px 0 0;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;
