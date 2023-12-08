import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createAssertGuardEquals_ObjectNullable =
  _test_assertGuardEquals("ObjectNullable")<ObjectNullable>(ObjectNullable)(
    typia.createAssertGuardEquals<ObjectNullable>(),
  );
