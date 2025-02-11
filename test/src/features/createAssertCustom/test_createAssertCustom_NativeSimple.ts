import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeSimple } from "../../structures/NativeSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_NativeSimple = _test_assert(CustomGuardError)(
    "NativeSimple",
)<NativeSimple>(
    NativeSimple
)(typia.createAssert<NativeSimple>((p) => new CustomGuardError(p)));
