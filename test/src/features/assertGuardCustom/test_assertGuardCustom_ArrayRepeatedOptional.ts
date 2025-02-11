import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ArrayRepeatedOptional = _test_assertGuard(CustomGuardError)(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(
    ArrayRepeatedOptional
)((input) => typia.assertGuard<ArrayRepeatedOptional>(input, (p) => new CustomGuardError(p)));
