import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectSimple = _test_assertEquals(
  CustomGuardError,
)("ObjectSimple")<ObjectSimple>(ObjectSimple)(
  typia.createAssertEquals<ObjectSimple>((p) => new CustomGuardError(p)),
);
