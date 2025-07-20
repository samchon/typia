import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_llm_applicationEquals_claude_ArrayRecursive = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ArrayRecursive",
    factory: ArrayRecursive,
  })(
    typia.llm.application<
      ArrayRecursiveApplication,
      "claude",
      { equals: true }
    >(),
  );

interface ArrayRecursiveApplication {
  insert(p: { first: ArrayRecursive }): Promise<void>;
  reduce(p: {
    first: ArrayRecursive;
    second: ArrayRecursive | null;
  }): Promise<ArrayRecursive>;
  coalesce(p: {
    first: ArrayRecursive | null;
    second: ArrayRecursive | null;
    third?: ArrayRecursive | null;
  }): Promise<ArrayRecursive | null>;
}
