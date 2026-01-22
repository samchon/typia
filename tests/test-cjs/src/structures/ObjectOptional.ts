import { Spoiler } from "../helpers/Spoiler";

export interface ObjectOptional {
  id?: string;
  name?: string;
  email?: string;
  sequence?: number;
}
export namespace ObjectOptional {
  export function generate(): ObjectOptional {
    return {};
  }

  export const SPOILERS: Spoiler<ObjectOptional>[] = [
    (input) => {
      input.id = 0 as any;
      return ["$input.id"];
    },
    (input) => {
      input.name = [] as any;
      return ["$input.name"];
    },
    (input) => {
      input.email = {} as any;
      return ["$input.email"];
    },
    (input) => {
      input.sequence = "0" as any;
      return ["$input.sequence"];
    },
  ];
}
