import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createAssert_ArrayRecursiveUnionImplicit = _test_assert(
  "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
  typia.createAssert<ArrayRecursiveUnionImplicit>(),
);
