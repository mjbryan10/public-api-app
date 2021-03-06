/**
 * The properties of an Episode from the Rick and Morty API.
 */
export interface Episode extends ApiEntry {
  /** String date for when the Episode was first broadcast */
  air_date: string;
  /** The season and episode number, in the format e.g. S01E01 */
  episode: string;
  /** An array of string Urls to fetch data for the characters in the episode */
  characters: string[];
}
/**
 * The response from the Rick and Morty characters API.
 * 
 * `info` contains properties related to Characters database
 * (count, pages, the next and prev page urls).
 * 
 * `results` contains an array of Characters.
 */
export interface CharactersAPIResponse {
  /** Infomation related to the API response */
  info: ApiInfo;
  /** An array of Characters returned from the Database */
  results: Character[];
  /** A string response should a request be invalid */
  error?: string;
}
/**
 * The info field on the Characters API response.
 */
export interface ApiInfo {
  /** Number of total results */
  count: number;
  /** Total number of pages */
  pages: number;
  /** The next page of results */
  next: string;
  /** The previous page of results */
  prev: string;
}
/**
 * The properties of a Character from the Rick and Morty API
 */
export interface Character extends ApiEntry {
  /** The living status of the character */
  status: string;
  /** What species the character is */
  species: string;
  /** What specific species type that character is */
  type: string;
  /** The known gender of the character */
  gender: string;
  /** The location of origin for the character */
  origin: Origin;
  /** Url for the character image */
  image: string;
  /** Array of episode Urls for which the character is in */
  episode: string[];
}
/**
 * Properties of an Origin, found on a Character from the Rick and Morty API.
 */
interface Origin {
  /** Name of the location */
  name: string;
  /** The Url string to retrieve this location information */
  url: string;
}
/**
 * Properties of a Location from the Rick and Morty API.
 */
export interface Location extends ApiEntry {
  type: string;
  /** The dimension in which the location is located. */
  dimension: string;
  /** List of characters who have been last seen in the location. */
  residents: string[];
  /** Time at which the location was created in the database. */
}
/**
 * The common interface for Database entries for the 
 * Rick and Morty Public API
 */
interface ApiEntry {
  /** Unique indentifier for the entry */
  id: number;
  /** The title of the entry */
  name: string;
  /** Link to the entry's own endpoint. */
  url: string;
  /** Time at which the entry was created in the database. */
  created: string;
  /** A string response should a request be invalid */
  error?: string;
}
/**
 * Possible responses from the Rick and Morty API.
 */
export type RnmApiResponse = CharactersAPIResponse | Episode | Location | Character;

/**
 * Interface for the query format.
 */
export interface ApiQuery {
  [key: string]: string;
}