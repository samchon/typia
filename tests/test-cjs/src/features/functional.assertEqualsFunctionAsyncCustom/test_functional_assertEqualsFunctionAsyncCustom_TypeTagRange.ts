import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagRange =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "TypeTagRange",
    )(TypeTagRange)((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
