import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TypeTagLength = _test_assertEquals(
  CustomGuardError,
)("TypeTagLength")<TypeTagLength>(TypeTagLength)(
  typia.createAssertEquals<TypeTagLength>((p) => new CustomGuardError(p)),
);
