import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertEqualsFunctionAsync_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TypeTagFormat")(
      TypeTagFormat,
    )((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.assertEqualsFunction(p),
    );
