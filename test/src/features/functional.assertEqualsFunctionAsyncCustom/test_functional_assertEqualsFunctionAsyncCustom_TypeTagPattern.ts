import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagPattern =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "TypeTagPattern",
  )(TypeTagPattern)((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
