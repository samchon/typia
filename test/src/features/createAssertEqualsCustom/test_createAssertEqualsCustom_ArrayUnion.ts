import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ArrayUnion = (): void => _test_assertEquals(CustomGuardError)(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.createAssertEquals<ArrayUnion>((p) => new CustomGuardError(p)));
