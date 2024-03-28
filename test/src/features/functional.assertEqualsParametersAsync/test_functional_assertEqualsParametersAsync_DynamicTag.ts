import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertEqualsParametersAsync_DynamicTag =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertEqualsParameters(p),
  );
