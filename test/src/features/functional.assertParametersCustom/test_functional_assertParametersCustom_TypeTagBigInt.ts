import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertParametersCustom_TypeTagBigInt =
  _test_functional_assertParameters(CustomGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => TypeTagBigInt) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
