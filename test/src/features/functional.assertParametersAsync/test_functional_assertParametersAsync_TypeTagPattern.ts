import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertParametersAsync_TypeTagPattern =
  _test_functional_assertParametersAsync(TypeGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
    typia.functional.assertParameters(p),
  );
