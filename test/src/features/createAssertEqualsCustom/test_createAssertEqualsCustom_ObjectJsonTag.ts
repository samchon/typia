import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_createAssertEqualsCustom_ObjectJsonTag = _test_assertEquals(
  CustomGuardError,
)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
  typia.createAssertEquals<ObjectJsonTag>((p) => new CustomGuardError(p)),
);
