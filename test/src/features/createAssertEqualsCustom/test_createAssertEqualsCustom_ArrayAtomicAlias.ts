import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ArrayAtomicAlias = (): void => _test_assertEquals(CustomGuardError)(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)(typia.createAssertEquals<ArrayAtomicAlias>((p) => new CustomGuardError(p)));
