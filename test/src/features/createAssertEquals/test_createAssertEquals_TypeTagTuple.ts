import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagTuple = _test_assertEquals(
  TypeGuardError,
)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
  typia.createAssertEquals<TypeTagTuple>(),
);
