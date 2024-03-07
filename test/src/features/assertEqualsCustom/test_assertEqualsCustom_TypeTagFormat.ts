import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TypeTagFormat = _test_assertEquals(
  CustomGuardError,
)("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)((input) =>
  typia.assertEquals<TypeTagFormat>(input, (p) => new CustomGuardError(p)),
);
