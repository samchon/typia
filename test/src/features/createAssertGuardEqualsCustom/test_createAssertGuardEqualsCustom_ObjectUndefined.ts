import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectUndefined =
  _test_assertGuardEquals(CustomGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )(
    typia.createAssertGuardEquals<ObjectUndefined>(
      (p) => new CustomGuardError(p),
    ),
  );
