import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assertGuardEquals_ObjectPrimitive = _test_assertGuardEquals(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.assertGuardEquals<ObjectPrimitive>(input),
);
