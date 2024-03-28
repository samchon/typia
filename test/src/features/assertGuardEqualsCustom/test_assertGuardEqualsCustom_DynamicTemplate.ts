import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertGuardEqualsCustom_DynamicTemplate =
  _test_assertGuardEquals(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) =>
    typia.assertGuardEquals<DynamicTemplate>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
