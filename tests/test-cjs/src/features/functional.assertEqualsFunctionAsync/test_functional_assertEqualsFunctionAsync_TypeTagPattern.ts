import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertEqualsFunctionAsync_TypeTagPattern =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "TypeTagPattern",
    )(TypeTagPattern)((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.assertEqualsFunction(p),
    );
