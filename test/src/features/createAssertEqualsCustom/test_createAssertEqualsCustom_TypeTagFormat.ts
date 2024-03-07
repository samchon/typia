import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TypeTagFormat = _test_assertEquals(
  CustomGuardError,
)("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
  typia.createAssertEquals<TypeTagFormat>((p) => new CustomGuardError(p)),
);
