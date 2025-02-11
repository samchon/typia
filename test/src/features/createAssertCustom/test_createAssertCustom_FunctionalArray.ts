import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_FunctionalArray = _test_assert(CustomGuardError)(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)(typia.createAssert<FunctionalArray>((p) => new CustomGuardError(p)));
