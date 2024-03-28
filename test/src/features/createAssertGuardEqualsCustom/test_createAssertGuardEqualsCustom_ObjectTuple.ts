import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createAssertGuardEqualsCustom_ObjectTuple =
  _test_assertGuardEquals(CustomGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )(typia.createAssertGuardEquals<ObjectTuple>((p) => new CustomGuardError(p)));
