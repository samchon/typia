import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagLength =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "TypeTagLength",
    )(TypeTagLength)((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
