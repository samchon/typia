import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_DynamicTemplate =
  _test_assertGuardEquals(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(
    typia.createAssertGuardEquals<DynamicTemplate>(
      (p) => new CustomGuardError(p),
    ),
  );
