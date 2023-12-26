export const apiPokemon = {
   list: '/pokemon?limit=1200',
   type: '/type',
   image: (id: string) =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}
