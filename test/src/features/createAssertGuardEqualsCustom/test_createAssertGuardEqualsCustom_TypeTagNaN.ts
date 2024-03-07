import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TypeTagNaN =
  _test_assertGuardEquals(CustomGuardError)("TypeTagNaN")<TypeTagNaN>(
    TypeTagNaN,
  )(typia.createAssertGuardEquals<TypeTagNaN>((p) => new CustomGuardError(p)));
