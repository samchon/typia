import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertEqualsFunctionAsync_TypeTagMatrix =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TypeTagMatrix")(
      TypeTagMatrix,
    )((p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
      typia.functional.assertEqualsFunction(p),
    );
