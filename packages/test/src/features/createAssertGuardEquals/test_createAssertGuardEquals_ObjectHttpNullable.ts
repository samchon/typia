import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createAssertGuardEquals_ObjectHttpNullable =
  _test_assertGuardEquals("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(typia.createAssertGuardEquals<ObjectHttpNullable>());
