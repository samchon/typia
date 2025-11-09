import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_assertGuardEqualsCustom_TypeTagTuple = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )((input) =>
    typia.assertGuardEquals<TypeTagTuple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
