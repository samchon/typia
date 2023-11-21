import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssertGuardEquals_ClassGetter = _test_assertGuardEquals(
  "ClassGetter",
)<ClassGetter>(ClassGetter)(typia.createAssertGuardEquals<ClassGetter>());
