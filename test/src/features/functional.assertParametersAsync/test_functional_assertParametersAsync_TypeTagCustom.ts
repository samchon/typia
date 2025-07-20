import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertParametersAsync_TypeTagCustom =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TypeTagCustom")(
      TypeTagCustom,
    )((p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
      typia.functional.assertParameters(p),
    );
