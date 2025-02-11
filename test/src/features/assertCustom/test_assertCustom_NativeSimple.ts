import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeSimple } from "../../structures/NativeSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_NativeSimple = _test_assert(CustomGuardError)(
    "NativeSimple",
)<NativeSimple>(
    NativeSimple
)((input) => typia.assert<NativeSimple>(input, (p) => new CustomGuardError(p)));
