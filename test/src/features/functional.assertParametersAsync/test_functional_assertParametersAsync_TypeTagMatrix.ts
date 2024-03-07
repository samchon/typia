import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_TypeTagMatrix =
  _test_functional_assertParametersAsync(TypeGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.assertParameters(p),
  );
