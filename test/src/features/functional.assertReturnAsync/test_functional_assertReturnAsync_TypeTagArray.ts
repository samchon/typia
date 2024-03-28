import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertReturnAsync_TypeTagArray =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertReturn(p),
  );
