import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_assertCustom_DynamicUndefined = (): void =>
  _test_assert(CustomGuardError)("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )((input) =>
    typia.assert<DynamicUndefined>(input, (p) => new CustomGuardError(p)),
  );
