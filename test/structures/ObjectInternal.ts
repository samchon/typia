import { Spoiler } from "../helpers/Spoiler";

export interface ObjectInternal {
  id: string;
  name: string;

  /**
   * @internal
   */
  __age: number;
}
export namespace ObjectInternal {
  export function generate(): ObjectInternal {
    return {
      id: "id",
      name: "name",
    } as ObjectInternal;
  }

  export const SPOILERS: Spoiler<ObjectInternal>[] = [
    (input) => {
      input.name = false as any;
      return ["$input.name"];
    },
    (input) => {
      input.id = 1 as any;
      return ["$input.id"];
    },
  ];
  export const RESOLVABLE: boolean = false;
}
