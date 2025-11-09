import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TypeTagInfinite = (): void => _test_assertGuardEquals(CustomGuardError)(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)(typia.createAssertGuardEquals<TypeTagInfinite>((p) => new CustomGuardError(p)));
