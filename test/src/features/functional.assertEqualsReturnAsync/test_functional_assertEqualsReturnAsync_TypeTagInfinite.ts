import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertEqualsReturnAsync_TypeTagInfinite =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagInfinite")(
      TypeTagInfinite,
    )((p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
      typia.functional.assertEqualsReturn(p),
    );
