import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertParametersAsyncCustom_TypeTagArray =
  _test_functional_assertParametersAsync(CustomGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
