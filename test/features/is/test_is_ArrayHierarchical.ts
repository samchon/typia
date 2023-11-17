import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_is_ArrayHierarchical = _test_is(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.is<ArrayHierarchical>(input),
);
