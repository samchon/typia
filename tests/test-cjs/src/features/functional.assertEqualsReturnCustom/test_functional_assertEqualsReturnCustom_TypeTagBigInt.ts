import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertEqualsReturnCustom_TypeTagBigInt =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagBigInt")(
      TypeTagBigInt,
    )((p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
