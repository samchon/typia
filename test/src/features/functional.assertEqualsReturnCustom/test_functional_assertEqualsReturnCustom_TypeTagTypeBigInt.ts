import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertEqualsReturnCustom_TypeTagTypeBigInt =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagTypeBigInt")(
      TypeTagTypeBigInt,
    )((p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
