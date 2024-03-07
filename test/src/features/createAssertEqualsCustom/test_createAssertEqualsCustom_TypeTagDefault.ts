import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TypeTagDefault = _test_assertEquals(
  CustomGuardError,
)("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
  typia.createAssertEquals<TypeTagDefault>((p) => new CustomGuardError(p)),
);
