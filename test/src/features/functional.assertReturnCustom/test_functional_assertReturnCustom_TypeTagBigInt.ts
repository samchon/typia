import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_TypeTagBigInt =
  _test_functional_assertReturn(CustomGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => TypeTagBigInt) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
