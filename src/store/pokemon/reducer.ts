import { createSlice } from '@reduxjs/toolkit'
import { getDataPokemon, getTypePokemon } from '@/store/pokemon/action'

export type TypeData = {
   name: string,
   url: string
}

export type PokemonData = {
   name: string,
   url: string
}

interface PokemonInterface {
   loading: boolean;
   PokemonList: {
      total?: number,
      page?: number,
      limit?: number,
      result: PokemonData[],
      data: PokemonData[];
   };
   Type: {
      data: TypeData[]
   }
}

const initialState: PokemonInterface = {
   loading: false,
   PokemonList: {
      result: [],
      data: []
   },
   Type: {
      data: []
   }
}

const pokemonSlice = createSlice({
   name: 'Pokemon',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getDataPokemon.pending, (state) => ({
         ...state,
         loading: true
      }))
      builder.addCase(getDataPokemon.fulfilled, (state, action) => {
         const { payload } = action
         return {
            ...state,
            loading: false,
            PokemonList: {
               total: payload.results.length,
               totalPage: Math.round(payload.results.length / payload.pagination.limit),
               limit: payload.pagination.limit,
               result: payload.results,
               data: payload.results.slice(payload.pagination.limit * payload.pagination.total, payload.pagination.limit * payload.pagination.page)
            }
         }
      })
      builder.addCase(getDataPokemon.rejected, (state) => ({
         ...state,
         loading: false
      }))


      builder.addCase(getTypePokemon.pending, (state) => ({
         ...state,
         loading: true
      }))
      builder.addCase(getTypePokemon.fulfilled, (state, action) => {
         return {
            ...state,
            loading: false,
            Type: {
               data: action.payload
            }
         }
      })
      builder.addCase(getTypePokemon.rejected, (state) => ({
         ...state,
         loading: false
      }))

   }
})

export default pokemonSlice.reducer
