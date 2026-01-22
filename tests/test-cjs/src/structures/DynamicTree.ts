import { ArrayUtil } from "typia/lib/utils/ArrayUtil";
import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface DynamicTree {
  id: string;
  sequence: number;
  children: Record<string, DynamicTree>;
}
export namespace DynamicTree {
  export const ADDABLE = false;
  export const RECURSIVE = true;

  export function generate(): DynamicTree {
    return create(3, 1);
  }

  function create(limit: number, level: number): DynamicTree {
    const tree: DynamicTree = {
      id: v4(),
      sequence: 0,
      children: {},
    };
    if (level < limit)
      ArrayUtil.repeat(TestRandomGenerator.integer(2, 5), () => {
        const child: DynamicTree = create(limit, level + 1);
        tree.children[child.id] = child;
      });
    return tree;
  }

  export const SPOILERS: Spoiler<DynamicTree>[] = [
    (input) => {
      const tree = Object.values(input.children)[0]!;
      const id = tree.id;
      tree.id = null!;
      return [`$input.children["${id}"].id`];
    },
    (input) => {
      const top = Object.values(input.children)[0]!;
      const bottom = Object.values(top.children)[0]!;
      bottom.sequence = "one" as any;
      return [`$input.children["${top.id}"].children["${bottom.id}"].sequence`];
    },
  ];
}
