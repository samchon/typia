import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_TypeTagArray =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertEqualsReturn(p),
  );
