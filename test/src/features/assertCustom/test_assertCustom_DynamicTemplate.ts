import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertCustom_DynamicTemplate = (): void =>
  _test_assert(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) =>
    typia.assert<DynamicTemplate>(input, (p) => new CustomGuardError(p)),
  );
