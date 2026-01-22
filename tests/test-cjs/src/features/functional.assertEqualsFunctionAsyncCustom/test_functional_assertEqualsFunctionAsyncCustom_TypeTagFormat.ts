import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "TypeTagFormat",
    )(TypeTagFormat)((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
