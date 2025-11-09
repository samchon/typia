import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArrayAny = (): void => _test_assert(CustomGuardError)(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)(typia.createAssert<ArrayAny>((p) => new CustomGuardError(p)));
