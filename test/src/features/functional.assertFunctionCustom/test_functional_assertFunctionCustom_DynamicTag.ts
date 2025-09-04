import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertFunctionCustom_DynamicTag = (): void =>
  _test_functional_assertFunction(CustomGuardError)("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
