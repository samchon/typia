import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assertGuardEquals_ArrayUnion = _test_assertGuardEquals(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) =>
  typia.assertGuardEquals<ArrayUnion>(input),
);
