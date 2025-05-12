import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertParametersCustom_DynamicTag =
  _test_functional_assertParameters(CustomGuardError)("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
