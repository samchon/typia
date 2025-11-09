import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_assertGuardEqualsCustom_TypeTagNaN = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagNaN")<TypeTagNaN>(
    TypeTagNaN,
  )((input) =>
    typia.assertGuardEquals<TypeTagNaN>(input, (p) => new CustomGuardError(p)),
  );
