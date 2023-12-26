import callAPI from '@/helpers/configApi';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { apiPokemon } from '@/api/pokemon';

export const getDataPokemon = createAsyncThunk<any>('listPokemon', async () => {
  const { results } = await callAPI({
    method: 'get',
    url: apiPokemon.list,
  });
  return results;
});

export const paginationList = createAction('pagination');
