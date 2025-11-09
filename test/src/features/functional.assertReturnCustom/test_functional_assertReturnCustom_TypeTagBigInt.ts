import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertReturnCustom_TypeTagBigInt = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => TypeTagBigInt) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
