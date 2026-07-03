import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

export type ObjectRecursiveShared = ObjectRecursiveShared.IDirectory;
export namespace ObjectRecursiveShared {
  export const RECURSIVE = true;

  /**
   * A recursive directory tree whose generated value is a DAG: the very same
   * `shared` instance is referenced from two different branches. Walking it is
   * finite, but every visit-tracked feature (issue #1820) crosses its
   * deduplication path — and a spoiled shared instance must be reported at
   * every position it appears under, pinning the delete-on-fail re-walk of the
   * generated validators.
   */
  export interface IDirectory {
    id: number;
    name: string;
    children: IDirectory[];
  }

  export function generate(): ObjectRecursiveShared {
    const shared: IDirectory = {
      id: TestRandomGenerator.integer(),
      name: TestRandomGenerator.string(),
      children: [],
    };
    return {
      id: TestRandomGenerator.integer(),
      name: TestRandomGenerator.string(),
      children: [
        {
          id: TestRandomGenerator.integer(),
          name: TestRandomGenerator.string(),
          children: [shared],
        },
        {
          id: TestRandomGenerator.integer(),
          name: TestRandomGenerator.string(),
          children: [shared],
        },
      ],
    };
  }

  export const SPOILERS: Spoiler<ObjectRecursiveShared>[] = [
    (input) => {
      // One mutation, two paths: the spoiled object is the shared instance.
      input.children[0]!.children[0]!.name = 1 as any;
      return [
        "$input.children[0].children[0].name",
        "$input.children[1].children[0].name",
      ];
    },
    (input) => {
      input.name = false as any;
      return ["$input.name"];
    },
    (input) => {
      input.children[1]!.id = "one" as any;
      return ["$input.children[1].id"];
    },
  ];
}
