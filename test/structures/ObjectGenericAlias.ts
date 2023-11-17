import { Spoiler } from "../helpers/Spoiler";

export type ObjectGenericAlias = ObjectGenericAlias.Alias;
export namespace ObjectGenericAlias {
  export type Alias = ISomething<string>;
  export interface ISomething<T> {
    value: T;
  }
  export function generate(): Alias {
    return {
      value: "something",
    };
  }

  export const SPOILERS: Spoiler<Alias>[] = [
    (input) => {
      input.value = { value: "value" } as any;
      return ["$input.value"];
    },
    (input) => {
      input.value = null!;
      return ["$input.value"];
    },
    (input) => {
      input.value = 1 as any;
      return ["$input.value"];
    },
  ];
}
