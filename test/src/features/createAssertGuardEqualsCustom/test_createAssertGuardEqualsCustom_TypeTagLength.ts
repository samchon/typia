import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createAssertGuardEqualsCustom_TypeTagLength = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(
    typia.createAssertGuardEquals<TypeTagLength>(
      (p) => new CustomGuardError(p),
    ),
  );
