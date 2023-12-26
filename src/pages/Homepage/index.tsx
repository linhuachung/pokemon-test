import { Card, Layout } from '@/components';
import {
  ContentButton,
  ContentItem,
  HomePageWrapperContentStyled,
} from '@/pages/Homepage/style';
import React, { useEffect, useState } from 'react';
import { getDataPokemon, paginationList } from '@/store/pokemon/action';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

type ListPokemon = {
  pokemon: {
    name: string;
    url: string;
  };
};
const Homepage = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(48);

  const { PokemonList: pokemonData } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getDataPokemon());
  }, []);

  const showMoreItem = () => {
    setLimit((limit) => limit + 48);
  };

  useEffect(() => {
    dispatch(paginationList(limit));
  }, [dispatch, limit]);
  console.log(pokemonData);
  return (
    <Layout>
      <HomePageWrapperContentStyled>
        <ContentItem>
          {pokemonData.data.map((pokemon: { name: string; url: string }) => {
            return (
              <Card key={pokemon.name} url={pokemon.url} title={pokemon.name} />
            );
          })}
        </ContentItem>
        <ContentButton>
          <Button type='default'>Primary Button</Button>
          <Button type='primary' onClick={showMoreItem}>
            Primary Button
          </Button>
        </ContentButton>
      </HomePageWrapperContentStyled>
    </Layout>
  );
};

export default Homepage;
