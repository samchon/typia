import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagInfinite =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "TypeTagInfinite",
    )(TypeTagInfinite)(
      (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
