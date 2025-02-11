import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_assertEquals_TypeTagDefault = _test_assertEquals(
  TypeGuardError,
)("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)((input) =>
  typia.assertEquals<TypeTagDefault>(input),
);
