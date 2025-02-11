import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertEqualsFunctionAsync_TypeTagArray =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertEqualsFunction(p),
  );
