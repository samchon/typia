import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_createAssertGuardEqualsCustom_TypeTagArray =
  _test_assertGuardEquals(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(
    typia.createAssertGuardEquals<TypeTagArray>((p) => new CustomGuardError(p)),
  );
