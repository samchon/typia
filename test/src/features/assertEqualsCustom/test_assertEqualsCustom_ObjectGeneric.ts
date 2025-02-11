import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assertEqualsCustom_ObjectGeneric = _test_assertEquals(
  CustomGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)((input) =>
  typia.assertEquals<ObjectGeneric>(input, (p) => new CustomGuardError(p)),
);
