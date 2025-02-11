import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createAssertEquals_TypeTagCustom = _test_assertEquals(
  TypeGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
  typia.createAssertEquals<TypeTagCustom>(),
);
