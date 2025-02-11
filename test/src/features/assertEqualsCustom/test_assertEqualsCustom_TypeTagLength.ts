import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_assertEqualsCustom_TypeTagLength = _test_assertEquals(
  CustomGuardError,
)("TypeTagLength")<TypeTagLength>(TypeTagLength)((input) =>
  typia.assertEquals<TypeTagLength>(input, (p) => new CustomGuardError(p)),
);
