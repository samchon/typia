import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_assertGuardEquals_FunctionalTuple = _test_assertGuardEquals(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)((input) =>
  typia.assertGuardEquals<FunctionalTuple>(input),
);
