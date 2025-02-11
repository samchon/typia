import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createAssert_FunctionalValue = _test_assert(TypeGuardError)(
  "FunctionalValue",
)<FunctionalValue>(FunctionalValue)(typia.createAssert<FunctionalValue>());
