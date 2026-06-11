import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

export type ObjectRecursiveCircular = ObjectRecursiveCircular.ITreeNode;
export namespace ObjectRecursiveCircular {
  export const RECURSIVE = true;
  // The generated value is genuinely circular (parent <-> children), which
  // JSON, protobuf, and the property-adding spoil harness cannot represent
  // or traverse — only the visit-tracked validators (issue #1820) run here.
  export const JSONABLE = false;
  export const BINARABLE = false;
  export const ADDABLE = false;

  /**
   * A doubly-linked tree: every child points back to its parent, so the
   * generated value contains runtime cycles. Validators used to overflow
   * the call stack on it; with visit tracking they accept the valid value
   * coinductively and report a spoiled property exactly once, because the
   * cyclic re-entry short-circuits while the check is still in progress.
   */
  export interface ITreeNode {
    id: number;
    name: string;
    parent: ITreeNode | null;
    children: ITreeNode[];
  }

  export function generate(): ObjectRecursiveCircular {
    const root: ITreeNode = {
      id: TestRandomGenerator.integer(),
      name: TestRandomGenerator.string(),
      parent: null,
      children: [],
    };
    for (let i: number = 0; i < 2; ++i) {
      const child: ITreeNode = {
        id: TestRandomGenerator.integer(),
        name: TestRandomGenerator.string(),
        parent: root,
        children: [],
      };
      const grandchild: ITreeNode = {
        id: TestRandomGenerator.integer(),
        name: TestRandomGenerator.string(),
        parent: child,
        children: [],
      };
      child.children.push(grandchild);
      root.children.push(child);
    }
    return root;
  }

  export const SPOILERS: Spoiler<ObjectRecursiveCircular>[] = [
    (input) => {
      // Inside the cycle: the parent back-references re-enter nodes whose
      // checks are still on the stack, so the violation reports exactly once.
      input.children[0]!.name = 1 as any;
      return ["$input.children[0].name"];
    },
    (input) => {
      input.name = null as any;
      return ["$input.name"];
    },
    (input) => {
      input.children[1]!.children[0]!.id = "deep" as any;
      return ["$input.children[1].children[0].id"];
    },
  ];
}
