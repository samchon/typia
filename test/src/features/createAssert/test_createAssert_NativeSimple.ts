import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeSimple } from "../../structures/NativeSimple";

import { TypeGuardError } from "typia";

export const test_createAssert_NativeSimple = _test_assert(TypeGuardError)(
    "NativeSimple",
)<NativeSimple>(
    NativeSimple
)(typia.createAssert<NativeSimple>());
