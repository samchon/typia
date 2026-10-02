/** Mutates one authored valid fixture into an invalid value and names its paths. */
export interface Spoiler<T> {
  (input: T): string[];
}
