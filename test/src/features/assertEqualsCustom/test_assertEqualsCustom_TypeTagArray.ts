import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_assertEqualsCustom_TypeTagArray = _test_assertEquals(
  CustomGuardError,
)("TypeTagArray")<TypeTagArray>(TypeTagArray)((input) =>
  typia.assertEquals<TypeTagArray>(input, (p) => new CustomGuardError(p)),
);
