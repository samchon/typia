import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { TypeGuardError } from "typia";

export const test_assert_FunctionalValue = (): void => _test_assert(TypeGuardError)(
    "FunctionalValue",
)<FunctionalValue>(
    FunctionalValue
)((input) => typia.assert<FunctionalValue>(input));
