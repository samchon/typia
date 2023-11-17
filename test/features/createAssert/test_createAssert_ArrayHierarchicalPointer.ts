import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_createAssert_ArrayHierarchicalPointer = _test_assert(
  "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
  typia.createAssert<ArrayHierarchicalPointer>(),
);
