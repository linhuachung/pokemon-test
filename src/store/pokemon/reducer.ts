import { createSlice } from '@reduxjs/toolkit';
import { getDataPokemon, paginationList } from '@/store/pokemon/action';

interface PokemonInterface {
  loading: boolean;
  PokemonList: {
    total?: number;
    totalPage?: number;
    limit?: number;
    data: any[];
  };
}

const initialState: PokemonInterface = {
  loading: false,
  PokemonList: {
    total: 0,
    totalPage: 1,
    limit: 48,
    data: [],
  },
};

const pokemonSlice = createSlice({
  name: 'Pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login
    builder.addCase(getDataPokemon.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getDataPokemon.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        PokemonList: {
          total: action.payload.length,
          totalPage: 48,
          limit: 48,
          data: action.payload.slice(0, 48),
        },
      };
    });
    builder.addCase(getDataPokemon.rejected, (state) => ({
      ...state,
      loading: false,
    }));

    builder.addCase(paginationList, (state, { payload }) => {
      console.log(state);
      const start = (payload - 1) * 48;
      const end = start + 48;
      return {
        ...state,
        loading: false,
        PokemonList: {
          currentPage: payload,
          data: state.PokemonList.data.slice(start, end),
        },
      };
    });
  },
});

export default pokemonSlice.reducer;
