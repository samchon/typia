import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssertGuardEquals_ClassMethod = _test_assertGuardEquals(
  "ClassMethod",
)<ClassMethod>(ClassMethod)(typia.createAssertGuardEquals<ClassMethod>());
