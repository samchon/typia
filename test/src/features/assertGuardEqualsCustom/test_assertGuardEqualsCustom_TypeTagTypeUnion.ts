import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_TypeTagTypeUnion = (): void => _test_assertGuardEquals(CustomGuardError)(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)((input) => typia.assertGuardEquals<TypeTagTypeUnion>(input, (p) => new CustomGuardError(p)));
