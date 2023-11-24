import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ArraySimple = ArraySimple.IPerson[];
export namespace ArraySimple {
  export interface IPerson {
    name: string;
    email: string;
    hobbies: IHobby[];
  }
  export interface IHobby {
    name: string;
    body: string;
    rank: number;
  }

  export function generate(): ArraySimple {
    return TestRandomGenerator.array(() => ({
      name: TestRandomGenerator.string(),
      email: TestRandomGenerator.string(),
      hobbies: TestRandomGenerator.array(() => ({
        name: TestRandomGenerator.string(),
        rank: TestRandomGenerator.integer(1, 3),
        body: TestRandomGenerator.string(),
      })),
    }));
  }

  export function trail(): ArraySimple {
    const data = generate();
    const hobbies = data[data.length - 1]!.hobbies;
    hobbies[hobbies.length - 1] = {} as any;
    return data;
  }

  export const SPOILERS: Spoiler<ArraySimple>[] = [
    (input) => {
      input[0]!.name = false as any;
      return ["$input[0].name"];
    },
    (input) => {
      input[0]!.email = ["a", "b"] as any;
      return ["$input[0].email"];
    },
    (input) => {
      input[0]!.hobbies = false as any;
      return ["$input[0].hobbies"];
    },
    (input) => {
      input[0]!.hobbies = [
        {
          name: "name",
          rank: "best" as any as number,
          body: "something",
        },
      ];
      return ["$input[0].hobbies[0].rank"];
    },
    (input) => {
      input[0]!.hobbies = [
        {
          name: "name",
          rank: 3,
          body: 3 as any,
        },
      ];
      return ["$input[0].hobbies[0].body"];
    },
    (input) => {
      input[1] = null!;
      return ["$input[1]"];
    },
  ];
  export const BINARABLE = false;
}
