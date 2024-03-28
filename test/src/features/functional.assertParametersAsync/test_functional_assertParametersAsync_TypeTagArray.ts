import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertParametersAsync_TypeTagArray =
  _test_functional_assertParametersAsync(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertParameters(p),
  );
