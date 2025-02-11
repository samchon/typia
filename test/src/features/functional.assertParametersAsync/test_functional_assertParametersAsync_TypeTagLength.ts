import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertParametersAsync_TypeTagLength =
  _test_functional_assertParametersAsync(TypeGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.assertParameters(p),
  );
