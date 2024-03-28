import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsParametersAsync_TypeTagLength =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.assertEqualsParameters(p),
  );
