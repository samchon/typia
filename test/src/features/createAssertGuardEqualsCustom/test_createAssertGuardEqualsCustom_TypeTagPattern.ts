import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createAssertGuardEqualsCustom_TypeTagPattern = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(
    typia.createAssertGuardEquals<TypeTagPattern>(
      (p) => new CustomGuardError(p),
    ),
  );
