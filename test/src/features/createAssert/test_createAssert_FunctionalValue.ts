import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { TypeGuardError } from "typia";

export const test_createAssert_FunctionalValue = _test_assert(TypeGuardError)(
    "FunctionalValue",
)<FunctionalValue>(
    FunctionalValue
)(typia.createAssert<FunctionalValue>());
