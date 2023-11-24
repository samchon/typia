import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ObjectTuple = [ObjectTuple.ISection, ObjectTuple.ICitizen];
export namespace ObjectTuple {
  export interface ISection {
    id: string;
    code: string;
    name: string;
  }
  export interface ICitizen {
    id: string;
    mobile: string;
    name: string;
  }

  export function generate(): ObjectTuple {
    return [
      {
        id: TestRandomGenerator.string(),
        code: TestRandomGenerator.string(),
        name: TestRandomGenerator.string(),
      },
      {
        id: TestRandomGenerator.string(),
        mobile: TestRandomGenerator.string(),
        name: TestRandomGenerator.string(),
      },
    ];
  }

  export const SPOILERS: Spoiler<ObjectTuple>[] = [
    (input) => {
      input[0].id = false as any;
      return ["$input[0].id"];
    },
    (input) => {
      input[0].code = undefined!;
      return ["$input[0].code"];
    },
    (input) => {
      input[0].name = null!;
      return ["$input[0].name"];
    },
    (input) => {
      input[1].id = {} as any;
      return ["$input[1].id"];
    },
    (input) => {
      input[1].mobile = null!;
      return ["$input[1].mobile"];
    },
    (input) => {
      input[1].name = [] as any;
      return ["$input[1].name"];
    },
    (input) => {
      input[0] = {
        id: "string",
        mobile: "string",
        name: "string",
      } as any;
      return ["$input[0].code"];
    },
    (input) => {
      input[1] = {
        id: "string",
        code: "string",
        name: "string",
      } as any;
      return ["$input[1].mobile"];
    },
  ];

  export const BINARABLE = false;
}
