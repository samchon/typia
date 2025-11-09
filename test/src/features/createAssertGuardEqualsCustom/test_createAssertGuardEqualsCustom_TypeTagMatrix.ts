import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createAssertGuardEqualsCustom_TypeTagMatrix = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )(
    typia.createAssertGuardEquals<TypeTagMatrix>(
      (p) => new CustomGuardError(p),
    ),
  );
