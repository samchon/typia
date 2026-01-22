import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_assertGuardEqualsCustom_TypeTagType = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )((input) =>
    typia.assertGuardEquals<TypeTagType>(input, (p) => new CustomGuardError(p)),
  );
