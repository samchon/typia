import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagDefault =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "TypeTagDefault",
    )(TypeTagDefault)((p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
