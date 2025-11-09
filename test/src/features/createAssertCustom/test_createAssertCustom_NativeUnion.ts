import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { NativeUnion } from "../../structures/NativeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_NativeUnion = (): void => _test_assert(CustomGuardError)(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)(typia.createAssert<NativeUnion>((p) => new CustomGuardError(p)));
