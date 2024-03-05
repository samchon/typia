import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createAssertEqualsCustom_TypeTagTuple = _test_assertEquals(
  CustomGuardError,
)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
  typia.createAssertEquals<TypeTagTuple>((p) => new CustomGuardError(p)),
);
