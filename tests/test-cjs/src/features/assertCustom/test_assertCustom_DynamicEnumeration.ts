import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertCustom_DynamicEnumeration = (): void =>
  _test_assert(CustomGuardError)("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )((input) =>
    typia.assert<DynamicEnumeration>(input, (p) => new CustomGuardError(p)),
  );
