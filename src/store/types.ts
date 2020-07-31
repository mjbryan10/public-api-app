import { Character } from '@/types/Interfaces';

/** The global Vuex store state */
export interface RootState {
  /** Numeric value to allow re-rendering of same route with shallow comparison */
  randomizerKey: number;
  /** Boolean value to indicate if the app is busy with loading content */
  isLoadingGlobal: boolean;
  /** String value to indicate the current status of the connection with the API */
  serverStatus: ServerStatusTypes;
  /** String value of error response from API request */
  // error: string;
  // /** A single character from the Rick and Morty API */
  // character: Character | null;
  // /** An array of characters from the Rick and Morty API */
  // characters: Character[];
  // /** An Episode from the Rick and Morty API */
  // episode: Episode | null;
  // /** An array of characters that share an episode from the Rick and Morty API */
  // similarCharacters: Character[];
}

export type ServerStatusTypes = 'OK' | 'warning' | 'offline';


export interface ModuleCharacterState {
  isLoading: boolean;
  error: string;
  result: Character | null;
}
