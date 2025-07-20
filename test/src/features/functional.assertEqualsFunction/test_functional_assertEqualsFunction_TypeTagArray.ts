import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertEqualsFunction_TypeTagArray = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => TypeTagArray) =>
    typia.functional.assertEqualsFunction(p),
  );
