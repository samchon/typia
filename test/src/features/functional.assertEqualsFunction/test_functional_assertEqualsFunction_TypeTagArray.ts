import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TypeTagArray =
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => TypeTagArray) =>
    typia.functional.assertEqualsFunction(p),
  );
