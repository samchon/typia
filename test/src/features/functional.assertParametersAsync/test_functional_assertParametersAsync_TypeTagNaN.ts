import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertParametersAsync_TypeTagNaN =
  _test_functional_assertParametersAsync(TypeGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.assertParameters(p),
  );
