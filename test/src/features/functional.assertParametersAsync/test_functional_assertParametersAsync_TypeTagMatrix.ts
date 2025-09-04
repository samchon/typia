import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertParametersAsync_TypeTagMatrix =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TypeTagMatrix")(
      TypeTagMatrix,
    )((p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
      typia.functional.assertParameters(p),
    );
