import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_assert_ArrayRecursiveUnionExplicitPointer = _test_assert(
  "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
  (input) => typia.assert<ArrayRecursiveUnionExplicitPointer>(input),
);
