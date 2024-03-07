import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_TypeTagArray =
  _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertFunction(p),
  );
