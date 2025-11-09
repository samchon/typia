import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createAssert_DynamicUndefined = (): void =>
  _test_assert(TypeGuardError)("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )(typia.createAssert<DynamicUndefined>());
