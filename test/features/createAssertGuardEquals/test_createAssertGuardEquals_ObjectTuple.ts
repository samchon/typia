import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createAssertGuardEquals_ObjectTuple = _test_assertGuardEquals(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(typia.createAssertGuardEquals<ObjectTuple>());
