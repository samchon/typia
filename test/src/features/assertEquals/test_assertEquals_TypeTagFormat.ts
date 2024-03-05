import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_assertEquals_TypeTagFormat = _test_assertEquals(
  TypeGuardError,
)("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)((input) =>
  typia.assertEquals<TypeTagFormat>(input),
);
