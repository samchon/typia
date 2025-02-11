import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createAssertEqualsCustom_TypeTagPattern = _test_assertEquals(
  CustomGuardError,
)("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
  typia.createAssertEquals<TypeTagPattern>((p) => new CustomGuardError(p)),
);
