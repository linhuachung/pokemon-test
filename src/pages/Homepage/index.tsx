import { Card, Layout } from '@/components';
import {
  ContentButton,
  ContentItem,
  HomePageWrapperContentStyled,
} from '@/pages/Homepage/style';
import React, { useEffect, useState } from 'react';
import { getDataPokemon, getTypePokemon } from '@/store/pokemon/action';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import useLoadingCommon from '@/hooks/useLoadingCommon';
import Loading from '../../components/Loading';
import { PokemonData, TypeData } from '@/store/pokemon/reducer';

type StatePokemon = {
  pokemon: {
    loading: boolean;
    PokemonList: {
      result: PokemonData[];
      data: PokemonData[];
      total?: number;
      page?: number;
      limit?: number | undefined;
    };
    Type: {
      data: TypeData[];
    };
  };
};

const Homepage = () => {
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    total: 0,
    page: 1,
    limit: 48,
  });
  const { isLoadingCommon } = useLoadingCommon();

  let [page, setPage] = useState(1);
  const { PokemonList: pokemonData } = useSelector((state: StatePokemon) => {
    return state.pokemon;
  });
  const { Type: typeList } = useSelector(
    (state: StatePokemon) => state.pokemon,
  );

  useEffect(() => {
    dispatch(getDataPokemon(payload));
  }, [payload, page]);

  useEffect(() => {
    dispatch(getTypePokemon());
  }, [dispatch]);
  const showMoreItem = (type: string) => {
    if (page < 0) return;
    if (type === 'next') {
      setPage(++page);
      setPayload({
        total: page - 1,
        page: page,
        limit: 48,
      });
    } else {
      setPage(--page);
      setPayload({
        total: page - 1,
        page: page,
        limit: 48,
      });
    }
  };
  return (
    <Layout>
      <HomePageWrapperContentStyled>
        <ContentButton>
          <ContentItem>
            {typeList.data.map((type) => (
              <Button type='primary' key={type.name}>
                {type.name}
              </Button>
            ))}
          </ContentItem>
        </ContentButton>

        <ContentItem>
          {isLoadingCommon ? (
            <Loading />
          ) : (
            pokemonData.data.map((pokemon: { name: string; url: string }) => {
              return (
                <Card
                  key={pokemon.name}
                  url={pokemon.url}
                  title={pokemon.name}
                />
              );
            })
          )}
        </ContentItem>
        <ContentButton>
          <Button
            type='default'
            onClick={() => showMoreItem('prev')}
            disabled={page === 1}
          >
            {' '}
            Prev
          </Button>
          <Button
            type='primary'
            onClick={() => showMoreItem('next')}
            disabled={pokemonData.limit * page === pokemonData.result.length}
          >
            Next
          </Button>
        </ContentButton>
      </HomePageWrapperContentStyled>
    </Layout>
  );
};

export default Homepage;
