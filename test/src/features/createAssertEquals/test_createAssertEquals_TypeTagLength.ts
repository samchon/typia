import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagLength = _test_assertEquals(
  TypeGuardError,
)("TypeTagLength")<TypeTagLength>(TypeTagLength)(
  typia.createAssertEquals<TypeTagLength>(),
);
