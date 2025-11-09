import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssertGuardEqualsCustom_DynamicTemplate = (): void =>
  _test_assertGuardEquals(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(
    typia.createAssertGuardEquals<DynamicTemplate>(
      (p) => new CustomGuardError(p),
    ),
  );
