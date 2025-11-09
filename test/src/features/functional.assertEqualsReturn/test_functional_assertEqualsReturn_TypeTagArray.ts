import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertEqualsReturn_TypeTagArray = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => TypeTagArray) =>
    typia.functional.assertEqualsReturn(p),
  );
