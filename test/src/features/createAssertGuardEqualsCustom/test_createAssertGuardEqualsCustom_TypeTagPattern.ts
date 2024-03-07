import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TypeTagPattern =
  _test_assertGuardEquals(CustomGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(
    typia.createAssertGuardEquals<TypeTagPattern>(
      (p) => new CustomGuardError(p),
    ),
  );
