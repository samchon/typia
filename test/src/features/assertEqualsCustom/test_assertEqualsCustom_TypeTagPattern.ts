import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TypeTagPattern = _test_assertEquals(
  CustomGuardError,
)("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.assertEquals<TypeTagPattern>(input, (p) => new CustomGuardError(p)),
);
