import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertParametersAsync_TypeTagInfinite =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TypeTagInfinite")(
      TypeTagInfinite,
    )((p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
      typia.functional.assertParameters(p),
    );
