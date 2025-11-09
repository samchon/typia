import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TypeTagObjectUnion = (): void => _test_assertGuard(CustomGuardError)(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)((input) => typia.assertGuard<TypeTagObjectUnion>(input, (p) => new CustomGuardError(p)));
