import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertEqualsParametersAsync_TypeTagArray =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertEqualsParameters(p),
  );
