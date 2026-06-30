import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

export type MapRecursiveKey = MapRecursiveKey.INode;
export namespace MapRecursiveKey {
  export const RECURSIVE = true;
  export const ADDABLE = false;
  export const BINARABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;

  /**
   * A node whose children hang off a `Map` keyed by the node type itself, so
   * the recursion travels through the map KEY rather than a plain property.
   * Recursion detection used to follow only map values, leaving a `Map<Self,
   * V>` unmarked; every visit-tracked feature (validate, equals, clone, random)
   * has to recognise the key edge or it either inlines forever at build time or
   * walks the wrong cycle at runtime. The generated value stays a finite tree
   * so the positive path of each feature runs to completion.
   */
  export interface INode {
    id: number;
    name: string;
    children: Map<INode, number>;
  }

  export function generate(): MapRecursiveKey {
    const leaf = (): INode => ({
      id: TestRandomGenerator.integer(),
      name: TestRandomGenerator.string(),
      children: new Map(),
    });
    return {
      id: TestRandomGenerator.integer(),
      name: TestRandomGenerator.string(),
      children: new Map([
        [leaf(), 1],
        [
          {
            id: TestRandomGenerator.integer(),
            name: TestRandomGenerator.string(),
            children: new Map([[leaf(), 3]]),
          },
          2,
        ],
      ]),
    };
  }

  export const SPOILERS: Spoiler<MapRecursiveKey>[] = [
    (input) => {
      input.name = 1 as any;
      return ["$input.name"];
    },
    (input) => {
      const key: INode = [...input.children.keys()][0]!;
      key.name = false as any;
      return ["$input.children[0][0].name"];
    },
    (input) => {
      const key: INode = [...input.children.keys()][1]!;
      const nested: INode = [...key.children.keys()][0]!;
      nested.id = "one" as any;
      return ["$input.children[1][0].children[0][0].id"];
    },
  ];
}
