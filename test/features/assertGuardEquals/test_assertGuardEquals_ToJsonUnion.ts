import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_assertGuardEquals_ToJsonUnion = _test_assertGuardEquals(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)((input) =>
  typia.assertGuardEquals<ToJsonUnion>(input),
);
