import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_equals_ArrayHierarchical = _test_equals(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.equals<ArrayHierarchical>(input),
);
