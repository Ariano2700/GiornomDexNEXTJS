export type Letter = {
  char: string;
  delay: number;
  left: number;
};
export type pokemonContextType = {
  searchValue: string;
  setNewSearchValue: (value: string) => void;
  pokemonType: string;
  setNewPokemonType: (type: Types) => void;
  loading: boolean;
  setNewLoading: (loading: boolean) => void;
};
type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};
export type Types = {
  type: {
    name: string;
    url: string;
  };
};

export type Pokemon = {
  id: number;
  species: {
    name: string;
  };
  sprites: {
    other: { home: { front_default: string } };
  };
  height: number;
  abilities: Ability[];
  stats: Stat[];
  types: Types[];
  weight: number;
};

export type handleChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type handleSubmitType = (e: React.FormEvent<HTMLFormElement>) => void;