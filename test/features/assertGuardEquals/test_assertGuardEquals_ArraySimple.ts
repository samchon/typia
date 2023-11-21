import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assertGuardEquals_ArraySimple = _test_assertGuardEquals(
  "ArraySimple",
)<ArraySimple>(ArraySimple)((input) =>
  typia.assertGuardEquals<ArraySimple>(input),
);
