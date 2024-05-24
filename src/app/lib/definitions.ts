export type Letter = {
  char: string;
  delay: number;
  left: number;
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
