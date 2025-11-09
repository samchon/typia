import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TypeTagDefault = (): void => _test_assertGuardEquals(CustomGuardError)(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.createAssertGuardEquals<TypeTagDefault>((p) => new CustomGuardError(p)));
