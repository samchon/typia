import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagInfinite =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "TypeTagInfinite",
  )(TypeTagInfinite)(
    (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
