import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TypeTagTypeUnion = (): void => _test_assertGuardEquals(CustomGuardError)(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)(typia.createAssertGuardEquals<TypeTagTypeUnion>((p) => new CustomGuardError(p)));
