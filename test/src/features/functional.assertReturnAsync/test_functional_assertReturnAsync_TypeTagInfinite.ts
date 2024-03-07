import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_TypeTagInfinite =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
    typia.functional.assertReturn(p),
  );
