import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertParametersAsync_TypeTagDefault =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TypeTagDefault")(
      TypeTagDefault,
    )((p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
      typia.functional.assertParameters(p),
    );
