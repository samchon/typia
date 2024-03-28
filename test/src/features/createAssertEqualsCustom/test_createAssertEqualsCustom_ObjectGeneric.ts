import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createAssertEqualsCustom_ObjectGeneric = _test_assertEquals(
  CustomGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
  typia.createAssertEquals<ObjectGeneric>((p) => new CustomGuardError(p)),
);
