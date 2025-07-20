import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertParametersAsync_TypeTagRange =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TypeTagRange")(
      TypeTagRange,
    )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      typia.functional.assertParameters(p),
    );
