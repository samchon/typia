import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_assertGuardEqualsCustom_TypeTagCustom = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )((input) =>
    typia.assertGuardEquals<TypeTagCustom>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
