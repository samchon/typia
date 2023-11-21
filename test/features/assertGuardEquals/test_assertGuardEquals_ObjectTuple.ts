import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assertGuardEquals_ObjectTuple = _test_assertGuardEquals(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input) =>
  typia.assertGuardEquals<ObjectTuple>(input),
);
