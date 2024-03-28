import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertEqualsReturnAsync_TypeTagArray =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertEqualsReturn(p),
  );
