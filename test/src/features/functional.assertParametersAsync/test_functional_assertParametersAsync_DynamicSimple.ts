import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_assertParametersAsync_DynamicSimple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("DynamicSimple")(
      DynamicSimple,
    )((p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
      typia.functional.assertParameters(p),
    );
