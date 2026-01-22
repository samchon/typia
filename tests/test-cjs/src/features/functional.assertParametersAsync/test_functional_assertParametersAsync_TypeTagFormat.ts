import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertParametersAsync_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TypeTagFormat")(
      TypeTagFormat,
    )((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.assertParameters(p),
    );
