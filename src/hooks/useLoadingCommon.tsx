import { useAppSelector } from '@/store';
import { useMemo } from 'react';

function useLoadingCommon() {
  const { loading: loadingPokemon } = useAppSelector(
    (state: any) => state.pokemon,
  );
  const listLoading = [loadingPokemon];
  const isLoadingCommon = useMemo(
    () => listLoading.some((item) => item),
    [listLoading],
  );

  return { isLoadingCommon };
}

export default useLoadingCommon;
