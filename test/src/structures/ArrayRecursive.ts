import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ArrayRecursive = ArrayRecursive.ICategory;
export namespace ArrayRecursive {
  export const RECURSIVE = true;

  export interface ICategory {
    children: ICategory[];
    id: number;
    code: string;
    sequence: number;
    created_at: ITimestamp;
  }
  export interface ITimestamp {
    time: number;
    zone: number;
  }

  export function generate(
    limit: number = 6,
    index: number = 0,
  ): ArrayRecursive {
    return {
      id: TestRandomGenerator.integer(),
      code: TestRandomGenerator.string(),
      sequence: TestRandomGenerator.integer(),
      created_at: {
        time: TestRandomGenerator.integer(),
        zone: TestRandomGenerator.integer(),
      },
      children:
        index < limit
          ? TestRandomGenerator.array(() => generate(limit, index + 1), 2)
          : [],
    };
  }

  export function trail(): ArrayRecursive {
    const data: ArrayRecursive = ArrayRecursive.generate();
    const current: { value: ArrayRecursive } = { value: data };
    while (current.value.children.length)
      current.value =
        current.value.children[current.value.children.length - 1]!;
    current.value.created_at.time = null!;
    return data;
  }

  export const SPOILERS: Spoiler<ArrayRecursive>[] = [
    (input) => {
      input.id = null!;
      return ["$input.id"];
    },
    (input) => {
      input.code = 3 as any;
      return ["$input.code"];
    },
    (input) => {
      input.sequence = "number" as any;
      return ["$input.sequence"];
    },
    (input) => {
      input.created_at = {} as any;
      return ["$input.created_at.time", "$input.created_at.zone"];
    },
    (input) => {
      input.children[0]!.children[0]!.sequence = "number" as any;
      return ["$input.children[0].children[0].sequence"];
    },
  ];
}
