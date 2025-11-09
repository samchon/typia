import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagDefault = (): void => _test_assert(CustomGuardError)(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.createAssert<TypeTagDefault>((p) => new CustomGuardError(p)));
