import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertGuardCustom_DynamicTemplate = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) =>
    typia.assertGuard<DynamicTemplate>(input, (p) => new CustomGuardError(p)),
  );
