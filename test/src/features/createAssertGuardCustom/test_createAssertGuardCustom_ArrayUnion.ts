import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArrayUnion = (): void => _test_assertGuard(CustomGuardError)(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.createAssertGuard<ArrayUnion>((p) => new CustomGuardError(p)));
