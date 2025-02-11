import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_assertEquals_TypeTagMatrix = _test_assertEquals(
  TypeGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.assertEquals<TypeTagMatrix>(input),
);
