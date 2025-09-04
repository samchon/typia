import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_assertCustom_TypeTagDefault = (): void =>
  _test_assert(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) =>
    typia.assert<TypeTagDefault>(input, (p) => new CustomGuardError(p)),
  );
