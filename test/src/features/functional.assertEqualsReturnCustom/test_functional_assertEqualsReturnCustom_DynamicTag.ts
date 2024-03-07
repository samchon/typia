import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicTag } from "../../structures/DynamicTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_DynamicTag =
  _test_functional_assertEqualsReturn(CustomGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => DynamicTag) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
