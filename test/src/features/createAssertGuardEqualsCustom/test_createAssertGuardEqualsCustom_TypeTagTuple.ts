import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createAssertGuardEqualsCustom_TypeTagTuple = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )(
    typia.createAssertGuardEquals<TypeTagTuple>((p) => new CustomGuardError(p)),
  );
