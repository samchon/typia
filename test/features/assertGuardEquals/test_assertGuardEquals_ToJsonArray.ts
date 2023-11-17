import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_assertGuardEquals_ToJsonArray = _test_assertGuardEquals(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)((input) =>
  typia.assertGuardEquals<ToJsonArray>(input),
);
