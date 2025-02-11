import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createAssertEqualsCustom_ObjectTuple = _test_assertEquals(
  CustomGuardError,
)("ObjectTuple")<ObjectTuple>(ObjectTuple)(
  typia.createAssertEquals<ObjectTuple>((p) => new CustomGuardError(p)),
);
