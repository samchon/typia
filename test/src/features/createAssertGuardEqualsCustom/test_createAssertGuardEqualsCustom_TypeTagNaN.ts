import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createAssertGuardEqualsCustom_TypeTagNaN =
  _test_assertGuardEquals(CustomGuardError)("TypeTagNaN")<TypeTagNaN>(
    TypeTagNaN,
  )(typia.createAssertGuardEquals<TypeTagNaN>((p) => new CustomGuardError(p)));
