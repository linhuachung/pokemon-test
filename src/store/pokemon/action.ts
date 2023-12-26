import callAPI from '@/helpers/configApi'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiPokemon } from '@/api/pokemon'

export const getDataPokemon = createAsyncThunk<any>('listPokemon', async (payload) => {
   const { results } = await callAPI({
      method: 'get',
      url: apiPokemon.list
   })
   return { results, pagination: payload }
})

export const getTypePokemon = createAsyncThunk<any>('listType', async (payload) => {
   const { results } = await callAPI({
      method: 'get',
      url: apiPokemon.type
   })
   return results
})

