import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_assertEqualsCustom_ObjectJsonTag = _test_assertEquals(
  CustomGuardError,
)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)((input) =>
  typia.assertEquals<ObjectJsonTag>(input, (p) => new CustomGuardError(p)),
);
