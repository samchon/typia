import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_assertEquals_TypeTagArray = _test_assertEquals(
  TypeGuardError,
)("TypeTagArray")<TypeTagArray>(TypeTagArray)((input) =>
  typia.assertEquals<TypeTagArray>(input),
);
