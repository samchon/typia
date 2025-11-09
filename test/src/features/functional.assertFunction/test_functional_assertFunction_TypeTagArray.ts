import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertFunction_TypeTagArray = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.assertFunction(p),
  );
