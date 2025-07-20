import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagNaN =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)("TypeTagNaN")(
      TypeTagNaN,
    )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
