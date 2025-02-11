import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertEqualsCustom_ArrayUnion = _test_assertEquals(
  CustomGuardError,
)("ArrayUnion")<ArrayUnion>(ArrayUnion)(
  typia.createAssertEquals<ArrayUnion>((p) => new CustomGuardError(p)),
);
