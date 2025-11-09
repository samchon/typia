import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagInfinite =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "TypeTagInfinite",
    )(TypeTagInfinite)(
      (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
