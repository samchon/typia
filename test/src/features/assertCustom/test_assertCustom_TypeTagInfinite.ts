import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_assertCustom_TypeTagInfinite = (): void =>
  _test_assert(CustomGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )((input) =>
    typia.assert<TypeTagInfinite>(input, (p) => new CustomGuardError(p)),
  );
