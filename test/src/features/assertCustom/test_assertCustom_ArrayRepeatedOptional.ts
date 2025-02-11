import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArrayRepeatedOptional = _test_assert(CustomGuardError)(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(
    ArrayRepeatedOptional
)((input) => typia.assert<ArrayRepeatedOptional>(input, (p) => new CustomGuardError(p)));
