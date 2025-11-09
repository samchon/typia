import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagPattern = (): void => _test_assert(CustomGuardError)(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.createAssert<TypeTagPattern>((p) => new CustomGuardError(p)));
