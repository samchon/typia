import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertGuardEquals_ToJsonDouble = _test_assertGuardEquals(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
  typia.assertGuardEquals<ToJsonDouble>(input),
);
