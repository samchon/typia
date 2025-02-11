import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createAssertGuardEqualsCustom_ObjectNullable =
  _test_assertGuardEquals(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(
    typia.createAssertGuardEquals<ObjectNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
