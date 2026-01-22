import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_createAssertGuardEqualsCustom_TypeTagRange = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )(
    typia.createAssertGuardEquals<TypeTagRange>((p) => new CustomGuardError(p)),
  );
