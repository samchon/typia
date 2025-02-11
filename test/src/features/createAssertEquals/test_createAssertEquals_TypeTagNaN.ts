import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createAssertEquals_TypeTagNaN = _test_assertEquals(
  TypeGuardError,
)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)(typia.createAssertEquals<TypeTagNaN>());
