import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_FunctionalArray = (): void => _test_assert(CustomGuardError)(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)((input) => typia.assert<FunctionalArray>(input, (p) => new CustomGuardError(p)));
