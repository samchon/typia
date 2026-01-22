import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createAssertGuardEqualsCustom_TypeTagInfinite = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )(
    typia.createAssertGuardEquals<TypeTagInfinite>(
      (p) => new CustomGuardError(p),
    ),
  );
