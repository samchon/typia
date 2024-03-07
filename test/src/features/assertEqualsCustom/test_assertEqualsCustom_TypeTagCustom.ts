import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TypeTagCustom = _test_assertEquals(
  CustomGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.assertEquals<TypeTagCustom>(input, (p) => new CustomGuardError(p)),
);
