import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertEqualsParametersCustom_DynamicTag =
  _test_functional_assertEqualsParameters(CustomGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => DynamicTag) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
