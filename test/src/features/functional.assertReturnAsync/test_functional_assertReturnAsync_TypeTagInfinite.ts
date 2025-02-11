import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertReturnAsync_TypeTagInfinite =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
    typia.functional.assertReturn(p),
  );
